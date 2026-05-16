const VS = {
  CURRENT_KEY: 'vs_current',
  TEACHER_SESSION_KEY: 'vs_teacher_session',
  _db: null,
  _students: [],
  _teacher: null,

  async init() {
    if (typeof firebase === 'undefined') return;
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    this._db = firebase.database();

    const [tSnap, sSnap] = await Promise.all([
      this._db.ref('teacher').once('value'),
      this._db.ref('students').once('value')
    ]);

    this._teacher = tSnap.val();
    const sObj = sSnap.val() || {};
    this._students = Object.values(sObj);

    // Atualiza dados em tempo real quando outro dispositivo fizer mudanças
    this._db.ref('students').on('value', snap => {
      const obj = snap.val() || {};
      this._students = Object.values(obj);
    });
    this._db.ref('teacher').on('value', snap => {
      this._teacher = snap.val();
    });
  },

  // ── Alunos ──
  getStudents() {
    return [...this._students];
  },
  getCurrentId() {
    return sessionStorage.getItem(this.CURRENT_KEY);
  },
  getCurrentStudent() {
    const id = this.getCurrentId();
    if (!id) return null;
    return this._students.find(s => s.id === id) || null;
  },
  setCurrentStudent(id) {
    sessionStorage.setItem(this.CURRENT_KEY, id);
    if (this._db) {
      this._db.ref(`students/${id}/lastActive`).set(Date.now());
    }
    const i = this._students.findIndex(s => s.id === id);
    if (i !== -1) this._students[i].lastActive = Date.now();
  },
  logout() {
    sessionStorage.removeItem(this.CURRENT_KEY);
    window.location.href = 'index.html';
  },
  requireAuth() {
    if (!this.getCurrentStudent()) {
      window.location.href = 'index.html';
    }
  },

  createStudent(name, avatar, password, school) {
    const student = {
      id: Date.now().toString(),
      name: name.trim(),
      avatar,
      password: password || '',
      school: school ? school.trim() : '',
      createdAt: Date.now(),
      lastActive: null,
      progress: { stories: {}, games: {} }
    };
    this._students.push(student);
    if (this._db) this._db.ref(`students/${student.id}`).set(student);
    return student;
  },
  deleteStudent(id) {
    this._students = this._students.filter(s => s.id !== id);
    if (this._db) this._db.ref(`students/${id}`).remove();
  },
  updateStudent(id, updates) {
    const i = this._students.findIndex(s => s.id === id);
    if (i !== -1) {
      this._students[i] = { ...this._students[i], ...updates };
      if (this._db) this._db.ref(`students/${id}`).update(updates);
      return this._students[i];
    }
    return null;
  },

  // ── Professor ──
  getTeacher() {
    return this._teacher;
  },
  saveTeacher(data) {
    this._teacher = data;
    if (this._db) this._db.ref('teacher').set(data);
  },
  registerTeacher({ name, email, school, classroom, password }) {
    const teacher = { name, email, school, classroom: classroom || '', password, createdAt: Date.now() };
    this.saveTeacher(teacher);
    this.setTeacherSession();
    return teacher;
  },
  loginTeacher(email, password) {
    const teacher = this.getTeacher();
    if (teacher && teacher.email === email && teacher.password === password) {
      this.setTeacherSession();
      return true;
    }
    return false;
  },
  setTeacherSession() {
    sessionStorage.setItem(this.TEACHER_SESSION_KEY, '1');
  },
  isTeacherLogged() {
    return sessionStorage.getItem(this.TEACHER_SESSION_KEY) === '1';
  },
  logoutTeacher() {
    sessionStorage.removeItem(this.TEACHER_SESSION_KEY);
    window.location.href = 'index.html';
  },
  requireTeacherAuth() {
    if (!this.isTeacherLogged()) {
      window.location.href = 'professor.html';
    }
  },
  updateTeacher(updates) {
    if (this._teacher) this._teacher = { ...this._teacher, ...updates };
    if (this._db) this._db.ref('teacher').update(updates);
  },

  // ── Estatísticas da turma ──
  getActiveTodayCount() {
    const today = new Date().toDateString();
    return this._students.filter(s =>
      s.lastActive && new Date(s.lastActive).toDateString() === today
    ).length;
  },
  getTotalStarsAll() {
    return this._students.reduce((total, s) =>
      total + Object.values(s.progress?.stories || {}).reduce((t, v) => t + (v.stars || 0), 0), 0
    );
  },
  getStudentStars(s) {
    return Object.values(s.progress?.stories || {}).reduce((t, v) => t + (v.stars || 0), 0);
  },

  // ── Progresso do aluno ──
  completeStory(storyId, stars) {
    const student = this.getCurrentStudent();
    if (!student) return 0;
    const progress = student.progress || { stories: {}, games: {} };
    if (progress.stories[storyId]?.completed) return;
    progress.stories[storyId] = { completed: true, stars, completedAt: Date.now() };
    this.updateStudent(student.id, { progress });
  },
  saveGameScore(gameId, score) {
    const student = this.getCurrentStudent();
    if (!student) return { isHighScore: false };
    const progress = student.progress || { stories: {}, games: {} };
    const prev = progress.games[gameId] || { highScore: 0, played: 0 };
    const isHighScore = score > prev.highScore;
    progress.games[gameId] = {
      highScore: Math.max(score, prev.highScore),
      played: prev.played + 1,
      lastScore: score,
      lastPlayed: Date.now()
    };
    this.updateStudent(student.id, { progress });
    return { isHighScore };
  },
  getTotalStars() {
    const s = this.getCurrentStudent();
    if (!s) return 0;
    return Object.values(s.progress?.stories || {}).reduce((t, v) => t + (v.stars || 0), 0);
  },
  getCompletedStories() {
    const s = this.getCurrentStudent();
    if (!s) return 0;
    return Object.values(s.progress?.stories || {}).filter(v => v.completed).length;
  },
  getStudentMedals(student) {
    const s = student || this.getCurrentStudent();
    if (!s) return [];
    return MEDALS.map(m => ({ ...m, earned: m.check(s) }));
  },
  getStudentProgressData(student) {
    const s = student || this.getCurrentStudent();
    if (!s) return { stories: 0, storiesTotal: 5, games: 0, gamesTotal: 4, tips: 0, tipsTotal: 1 };
    const stories = Object.values(s.progress?.stories || {}).filter(v => v.completed).length;
    const games = ['reciclagem','memoria','plantio','ecossistemas'].filter(id => (s.progress?.games?.[id]?.played || 0) > 0).length;
    const tips = s.progress?.tips?.visited ? 1 : 0;
    return { stories, storiesTotal: 5, games, gamesTotal: 4, tips, tipsTotal: 1 };
  },
  trackTipsVisit() {
    const student = this.getCurrentStudent();
    if (!student || student.progress?.tips?.visited) return;
    const progress = { ...(student.progress || { stories: {}, games: {} }) };
    if (!progress.tips) progress.tips = {};
    progress.tips.visited = true;
    progress.tips.visitedAt = Date.now();
    this.updateStudent(student.id, { progress });
  },

  renderHeader(activePage) {
    const s = this.getCurrentStudent();
    const navItems = [
      { href: 'home.html', icon: '🏠', label: 'Início', id: 'home' },
      { href: 'historias.html', icon: '📚', label: 'Histórias', id: 'historias' },
      { href: 'jogos.html', icon: '🎮', label: 'Jogos', id: 'jogos' },
      { href: 'dicas.html', icon: '💡', label: 'Dicas', id: 'dicas' },
      { href: 'conquistas.html', icon: '🏅', label: 'Conquistas', id: 'conquistas' }
    ];
    document.getElementById('studentBadge').innerHTML = s
      ? `<span class="badge-avatar">${s.avatar}</span><span>${s.name}</span>`
      : '';
    const footer = document.getElementById('appFooter');
    if (footer) {
      footer.innerHTML = navItems.map(n =>
        `<a href="${n.href}" class="footer-btn${n.id === activePage ? ' active' : ''}">
          <span class="nav-icon">${n.icon}</span><span>${n.label}</span>
        </a>`
      ).join('');
    }
  }
};
