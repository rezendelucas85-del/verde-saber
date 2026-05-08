const VS = {
  STUDENTS_KEY: 'vs_students',
  CURRENT_KEY: 'vs_current',

  getStudents() {
    return JSON.parse(localStorage.getItem(this.STUDENTS_KEY) || '[]');
  },
  saveStudents(students) {
    localStorage.setItem(this.STUDENTS_KEY, JSON.stringify(students));
  },
  getCurrentId() {
    return sessionStorage.getItem(this.CURRENT_KEY);
  },
  getCurrentStudent() {
    const id = this.getCurrentId();
    if (!id) return null;
    return this.getStudents().find(s => s.id === id) || null;
  },
  setCurrentStudent(id) {
    sessionStorage.setItem(this.CURRENT_KEY, id);
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

  createStudent(name, avatar) {
    const students = this.getStudents();
    const student = {
      id: Date.now().toString(),
      name: name.trim(),
      avatar,
      createdAt: Date.now(),
      level: 1,
      coins: 0,
      progress: { stories: {}, games: {} }
    };
    students.push(student);
    this.saveStudents(students);
    return student;
  },
  deleteStudent(id) {
    this.saveStudents(this.getStudents().filter(s => s.id !== id));
  },
  updateStudent(id, updates) {
    const students = this.getStudents();
    const i = students.findIndex(s => s.id === id);
    if (i !== -1) {
      students[i] = { ...students[i], ...updates };
      this.saveStudents(students);
      return students[i];
    }
    return null;
  },

  completeStory(storyId, stars) {
    const student = this.getCurrentStudent();
    if (!student) return 0;
    const progress = student.progress || { stories: {}, games: {} };
    if (progress.stories[storyId]?.completed) return 0;
    const reward = stars * 15;
    progress.stories[storyId] = { completed: true, stars, completedAt: Date.now() };
    const newCoins = (student.coins || 0) + reward;
    this.updateStudent(student.id, {
      progress,
      coins: newCoins,
      level: Math.floor(newCoins / 100) + 1
    });
    return reward;
  },
  saveGameScore(gameId, score) {
    const student = this.getCurrentStudent();
    if (!student) return { coinReward: 0, isHighScore: false };
    const progress = student.progress || { stories: {}, games: {} };
    const prev = progress.games[gameId] || { highScore: 0, played: 0 };
    const isHighScore = score > prev.highScore;
    progress.games[gameId] = {
      highScore: Math.max(score, prev.highScore),
      played: prev.played + 1,
      lastScore: score,
      lastPlayed: Date.now()
    };
    const reward = isHighScore ? score * 2 : score;
    const newCoins = (student.coins || 0) + reward;
    this.updateStudent(student.id, {
      progress,
      coins: newCoins,
      level: Math.floor(newCoins / 100) + 1
    });
    return { coinReward: reward, isHighScore };
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

  renderHeader(activePage) {
    const s = this.getCurrentStudent();
    const navItems = [
      { href: 'home.html', icon: '🏠', label: 'Início', id: 'home' },
      { href: 'historias.html', icon: '📚', label: 'Histórias', id: 'historias' },
      { href: 'jogos.html', icon: '🎮', label: 'Jogos', id: 'jogos' },
      { href: 'dicas.html', icon: '💡', label: 'Dicas', id: 'dicas' }
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
