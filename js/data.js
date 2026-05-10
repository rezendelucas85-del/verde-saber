const STORIES = [
  {
    id: 'floresta',
    title: 'A Floresta em Perigo',
    description: 'Os animais da Floresta Esmeralda descobrem que sua casa está em perigo. Será que conseguirão salvá-la?',
    icon: '🌳',
    gradient: 'linear-gradient(135deg,#C8E6C9,#66BB6A)',
    totalPages: 8,
    pages: [
      {
        illustration: '🌳 🐸 🦋',
        text: 'Era uma manhã ensolarada na Floresta Esmeralda. O sapinho Pingo estava sentado em seu cogumelo favorito quando percebeu algo diferente no ar...',
        type: 'normal'
      },
      {
        illustration: '😟 🐸 💨',
        text: 'O ar tinha um cheiro estranho e a água do riacho estava escura. Muitas árvores estavam caindo. "O que está acontecendo com nossa floresta?" perguntou Pingo, muito preocupado.',
        type: 'normal'
      },
      {
        illustration: '🐸 🦜 🐢',
        text: 'Pingo chamou seus amigos: a papagaia Flora e a tartaruga Tarta. Juntos foram investigar o problema. "Precisamos descobrir o que está causando isso!", disse Flora com determinação.',
        type: 'normal'
      },
      {
        illustration: '🏭 💨 🌊',
        text: 'Encontraram uma fábrica que jogava lixo no rio e soltava fumaça no ar. Os animais ficaram muito tristes. "Precisamos fazer algo!", disse Tarta devagar, mas com muita coragem.',
        type: 'normal'
      },
      {
        illustration: '🤔 ❓ 💭',
        text: 'Chegou a hora de decidir! O que os amigos devem fazer para salvar a floresta?',
        type: 'choice',
        choices: [
          { text: '🗣️ Conversar com as pessoas da fábrica sobre o problema', next: 5 },
          { text: '📋 Fazer cartazes e avisar toda a comunidade', next: 5 }
        ]
      },
      {
        illustration: '🤝 👩‍🔬 🌿',
        text: 'Ótima escolha! Com a ajuda de Ana, uma cientista ambiental, os animais mostraram como a poluição estava destruindo a floresta. As pessoas ficaram surpresas e quiseram ajudar!',
        type: 'normal'
      },
      {
        illustration: '🌱 🌊 ✨',
        text: 'Juntos, pessoas e animais limparam o rio, plantaram novas árvores e a fábrica aprendeu a reciclar seus resíduos. A Floresta Esmeralda começou a se recuperar!',
        type: 'normal'
      },
      {
        illustration: '🎉 🌈 🐸 🦜 🐢',
        text: 'Em poucos meses a floresta voltou a ser linda! O ar ficou puro, o riacho ficou limpo e os animais voltaram a cantar felizes. Pingo aprendeu: juntos podemos proteger a natureza!',
        type: 'normal'
      }
    ]
  },
  {
    id: 'rio',
    title: 'O Rio que Chorava',
    description: 'Zara, a lontra curiosa, descobre por que o Rio Cristal está ficando triste. Uma história sobre água limpa!',
    icon: '🦦',
    gradient: 'linear-gradient(135deg,#B3E5FC,#29B6F6)',
    totalPages: 7,
    pages: [
      {
        illustration: '🏞️ 🦦 💧',
        text: 'Zara era uma lontra muito curiosa que morava no Rio Cristal. Todos os dias ela nadava e brincava nas águas claras e frescas do rio.',
        type: 'normal'
      },
      {
        illustration: '😢 🌊 🐟',
        text: 'Mas um dia a água ficou turva e com mau cheiro. Os peixes começaram a desaparecer. "Nosso rio está chorando!", disse Zara, muito preocupada.',
        type: 'normal'
      },
      {
        illustration: '🔍 🦦 🌊',
        text: 'Zara decidiu explorar o rio inteiro para descobrir o problema. Ela nadou muito, muito longe, até as margens da cidade...',
        type: 'normal'
      },
      {
        illustration: '🗑️ 💧 😠',
        text: 'Encontrou pessoas jogando lixo direto no rio! Garrafas, sacolas plásticas e produtos químicos. "Isso está machucando nosso rio!" pensou Zara com tristeza.',
        type: 'normal'
      },
      {
        illustration: '🤔 💭 ✨',
        text: 'Zara precisa da sua ajuda! O que ela deve fazer para salvar o Rio Cristal?',
        type: 'choice',
        choices: [
          { text: '♻️ Organizar um mutirão de limpeza com amigos', next: 5 },
          { text: '📚 Criar uma história para ensinar as crianças', next: 5 }
        ]
      },
      {
        illustration: '👫 🌊 🧹',
        text: 'Excelente! Zara pediu ajuda para as crianças da cidade. Elas adoraram a ideia! No sábado todos vieram com luvas e sacos de lixo, prontos para ajudar!',
        type: 'normal'
      },
      {
        illustration: '🌈 🐟 🦦 💧',
        text: 'Depois da limpeza, o Rio Cristal voltou a brilhar! Os peixes voltaram, a água ficou limpa e Zara dançou feliz. Cuidar da água é cuidar da vida!',
        type: 'normal'
      }
    ]
  },
  {
    id: 'abelha',
    title: 'A Missão da Abelha Bela',
    description: 'Bela, a abelha trabalhadora, ensina sobre a importância das flores e da polinização para o nosso mundo.',
    icon: '🐝',
    gradient: 'linear-gradient(135deg,#FFF9C4,#FFD54F)',
    totalPages: 6,
    pages: [
      {
        illustration: '🌸 🐝 ✨',
        text: 'Bela era uma abelhinha muito especial. Todos os dias ela saía voando de flor em flor, carregando poleninho dourado em suas patinhas peludas.',
        type: 'normal'
      },
      {
        illustration: '🤔 🐝 👦',
        text: 'Um dia Tiago, um menino curioso, perguntou: "Abelha, para que você fica voando de flor em flor?" Bela sorriu e disse que ia mostrar para ele!',
        type: 'normal'
      },
      {
        illustration: '🌺 ➡️ 🍎',
        text: '"Quando eu visito as flores, levo um pózinho especial de uma para outra. Isso se chama polinização! Sem mim, as flores não viram frutas!"',
        type: 'normal'
      },
      {
        illustration: '🍎 🍊 🍇 🍓',
        text: '"Mas Bela," disse Tiago, "você está dizendo que maçã, laranja e morango precisam de você?" Bela balançou a cabeça: "Sim! E de todas as minhas irmãs abelhas!"',
        type: 'normal'
      },
      {
        illustration: '🌹 🌻 🌷 💛',
        text: '"O que eu posso fazer para ajudar as abelhas?" perguntou Tiago. O que você acha que ele deve fazer?',
        type: 'choice',
        choices: [
          { text: '🌱 Plantar flores coloridas no jardim de casa', next: 5 },
          { text: '🚫 Parar de usar venenos e pesticidas nas plantas', next: 5 }
        ]
      },
      {
        illustration: '🏡 🌸 🐝 😊',
        text: 'Perfeito! Tiago plantou um jardim lindo cheio de flores coloridas. Logo Bela e suas irmãs vieram morar ali. A vida de Tiago ficou mais colorida e saborosa!',
        type: 'normal'
      }
    ]
  }
];

const GAMES = [
  {
    id: 'reciclagem',
    title: 'Jogo da Reciclagem',
    description: 'Separe o lixo nas lixeiras certas! Cada material tem seu lugar.',
    icon: '♻️',
    gradient: 'linear-gradient(135deg,#C8E6C9,#66BB6A)',
    difficulty: 'easy',
    url: 'jogo-reciclagem.html'
  },
  {
    id: 'memoria',
    title: 'Memória dos Animais',
    description: 'Encontre os pares de animais ameaçados de extinção e aprenda sobre eles!',
    icon: '🦁',
    gradient: 'linear-gradient(135deg,#FFF9C4,#FFD54F)',
    difficulty: 'med',
    url: '#',
    comingSoon: true
  },
  {
    id: 'plantio',
    title: 'Simulador de Plantio',
    description: 'Aprenda a plantar e cuidar de uma horta virtual! Regue e colha.',
    icon: '🌱',
    gradient: 'linear-gradient(135deg,#DCEDC8,#AED581)',
    difficulty: 'easy',
    url: '#',
    comingSoon: true
  },
  {
    id: 'ecossistemas',
    title: 'Quebra-Cabeça Ambiental',
    description: 'Monte os ecossistemas do Brasil: Amazônia, Cerrado, Mata Atlântica!',
    icon: '🧩',
    gradient: 'linear-gradient(135deg,#B3E5FC,#4FC3F7)',
    difficulty: 'hard',
    url: '#',
    comingSoon: true
  }
];

const RECYCLING_ITEMS = [
  { emoji: '📰', name: 'Jornal', category: 'papel', hint: 'Jornais são feitos de papel reciclável!' },
  { emoji: '📦', name: 'Caixa de papelão', category: 'papel', hint: 'Papelão vai na lixeira azul (papel)!' },
  { emoji: '🗞️', name: 'Revista', category: 'papel', hint: 'Revistas e livros vão no papel!' },
  { emoji: '✉️', name: 'Envelope', category: 'papel', hint: 'Envelopes são papel reciclável!' },
  { emoji: '🧴', name: 'Frasco de plástico', category: 'plastico', hint: 'Plástico demora séculos para sumir da natureza.' },
  { emoji: '🥤', name: 'Copo descartável', category: 'plastico', hint: 'Tente usar menos descartáveis!' },
  { emoji: '🪣', name: 'Pote plástico', category: 'plastico', hint: 'Plástico vai na lixeira vermelha!' },
  { emoji: '🫙', name: 'Pote de vidro', category: 'vidro', hint: 'Vidro pode ser reciclado infinitas vezes!' },
  { emoji: '🍾', name: 'Garrafa de vidro', category: 'vidro', hint: 'Vidro não perde qualidade ao reciclar.' },
  { emoji: '🥫', name: 'Lata de alumínio', category: 'metal', hint: 'O Brasil recicla muitas latinhas de alumínio!' },
  { emoji: '🍴', name: 'Talher de metal', category: 'metal', hint: 'Metal vai na lixeira amarela!' },
  { emoji: '🍌', name: 'Casca de banana', category: 'organico', hint: 'Restos de comida viram adubo para plantas!' },
  { emoji: '🥚', name: 'Casca de ovo', category: 'organico', hint: 'Cascas de ovo são ótimas para o jardim!' },
  { emoji: '🍂', name: 'Folhas secas', category: 'organico', hint: 'Folhas se decompõem naturalmente.' },
  { emoji: '☕', name: 'Borra de café', category: 'organico', hint: 'Borra de café nutre muito as plantas!' },
  { emoji: '🍎', name: 'Núcleo de maçã', category: 'organico', hint: 'Restos de frutas são orgânicos!' }
];

const MEDALS = [
  {
    id: 'reciclador',
    icon: '♻️',
    title: 'Reciclador Estreante',
    desc: 'Jogou o Jogo da Reciclagem',
    check: s => (s.progress?.games?.reciclagem?.played || 0) > 0
  },
  {
    id: 'primeiro_capitulo',
    icon: '📖',
    title: 'Primeiro Capítulo',
    desc: 'Leu a primeira história',
    check: s => Object.keys(s.progress?.stories || {}).length >= 1
  },
  {
    id: 'amigo_animais',
    icon: '🐾',
    title: 'Amigo dos Animais',
    desc: 'Leu "O Rio que Chorava"',
    check: s => !!s.progress?.stories?.rio?.completed
  },
  {
    id: 'maos_terra',
    icon: '🌱',
    title: 'Mãos na Terra',
    desc: 'Leu "A Missão da Abelha Bela"',
    check: s => !!s.progress?.stories?.abelha?.completed
  },
  {
    id: 'eco_heroi',
    icon: '🌍',
    title: 'Eco Herói',
    desc: 'Completou todas as histórias',
    check: s => ['floresta','rio','abelha'].every(id => s.progress?.stories?.[id]?.completed)
  },
  {
    id: 'leitor_dedicado',
    icon: '🏆',
    title: 'Leitor Dedicado',
    desc: 'Todas as histórias com 3 estrelas',
    check: s => ['floresta','rio','abelha'].every(id => (s.progress?.stories?.[id]?.stars || 0) >= 3)
  },
  {
    id: 'guardiao_oceano',
    icon: '🌊',
    title: 'Guardião do Oceano',
    desc: '90+ pontos na Reciclagem',
    check: s => (s.progress?.games?.reciclagem?.highScore || 0) >= 90
  },
  {
    id: 'explorador',
    icon: '🦋',
    title: 'Explorador Completo',
    desc: 'Conquistou 6 ou mais medalhas',
    check: s => MEDALS.slice(0, 7).filter(m => m.check(s)).length >= 6
  }
];

const TIPS = [
  { icon: '💧', title: 'Economize Água', text: 'Feche a torneira enquanto escova os dentes. Isso economiza até 12 litros de água por vez!' },
  { icon: '♻️', title: 'Separe o Lixo', text: 'Separe o lixo em orgânico, plástico, papel, vidro e metal. Facilita a reciclagem e ajuda o planeta!' },
  { icon: '🌱', title: 'Plante uma Muda', text: 'Plante uma árvore ou uma flor. Uma única árvore produz oxigênio para 4 pessoas respirarem!' },
  { icon: '🛍️', title: 'Evite Plástico', text: 'Use sacolas reutilizáveis nas compras. Um saco plástico demora até 400 anos para se decompor!' },
  { icon: '💡', title: 'Apague as Luzes', text: 'Apague as luzes ao sair do ambiente. Isso reduz a conta de energia e protege o meio ambiente.' },
  { icon: '🚶', title: 'Ande a Pé ou de Bicicleta', text: 'Para distâncias curtas, prefira caminhar ou pedalar. Isso reduz a poluição do ar!' },
  { icon: '🍽️', title: 'Não Desperdice Comida', text: 'Sirva-se do que você vai comer. No Brasil desperdiçamos milhões de toneladas de alimento por ano.' },
  { icon: '🐝', title: 'Proteja os Polinizadores', text: 'Plante flores e evite pesticidas. Abelhas e borboletas são essenciais para produzir nossos alimentos!' },
  { icon: '🌊', title: 'Não Jogue Lixo no Mar', text: 'Resíduos plásticos matam milhares de animais marinhos por ano. Leve seu lixo para a lixeira!' },
  { icon: '🌳', title: 'Valorize as Florestas', text: 'Florestas são o lar de mais da metade dos animais do planeta e regulam o nosso clima.' }
];
