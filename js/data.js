const STORIES = [
  {
    id: 'floresta',
    title: 'A Floresta em Perigo',
    description: 'Os animais da Floresta Esmeralda descobrem que sua casa está em perigo. Será que conseguirão salvá-la?',
    icon: '🌳',
    gradient: 'linear-gradient(135deg,#C8E6C9,#66BB6A)',
    sceneBg: '#D7F0D8',
    totalPages: 8,
    pages: [
      {
        illustration: '🌳 🐸 🦋',
        text: 'Era uma manhã ensolarada na Floresta Esmeralda. O sapinho Pingo estava sentado em seu cogumelo favorito quando percebeu algo diferente no ar...',
        type: 'normal'
      },
      {
        illustration: '🐸 😟 💨',
        speech: 'O que está acontecendo com nossa floresta?',
        speaker: '🐸',
        text: 'O ar tinha um cheiro estranho e a água do riacho estava escura. Muitas árvores estavam caindo. Pingo ficou muito preocupado.',
        type: 'normal'
      },
      {
        illustration: '🐸 🦜 🐢',
        speech: 'Precisamos descobrir o que está causando isso!',
        speaker: '🦜',
        text: 'Pingo chamou seus amigos: a papagaia Flora e a tartaruga Tarta. Juntos foram investigar o problema.',
        type: 'normal'
      },
      {
        illustration: '🏭 💨 🐢',
        speech: 'Precisamos fazer algo!',
        speaker: '🐢',
        text: 'Encontraram uma fábrica que jogava lixo no rio e soltava fumaça no ar. Os animais ficaram muito tristes. Tarta estava assustada, mas cheia de coragem.',
        type: 'normal'
      },
      {
        illustration: '🐸 🦜 🐢',
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
        illustration: '🐸 🦜 🐢',
        speech: 'Juntos podemos proteger a natureza!',
        speaker: '🐸',
        text: 'Em poucos meses a floresta voltou a ser linda! O ar ficou puro, o riacho ficou limpo e os animais voltaram a cantar felizes. Pingo aprendeu: juntos podemos proteger a natureza!',
        type: 'normal'
      }
    ]
  },
  {
    id: 'rio',
    title: 'O Rio que Chorava',
    description: 'Zara, a menina curiosa, descobre por que o Rio Cristal está ficando triste. Uma história sobre água limpa!',
    icon: '👧',
    gradient: 'linear-gradient(135deg,#B3E5FC,#29B6F6)',
    sceneBg: '#D6ECFF',
    totalPages: 7,
    pages: [
      {
        illustration: '🏞️ 👧 💧',
        text: 'Zara era uma menina muito curiosa que morava perto do Rio Cristal. Todos os dias ela brincava e nadava nas águas claras e frescas do rio.',
        type: 'normal'
      },
      {
        illustration: '👧 😢 🐟',
        speech: 'Nosso rio está chorando!',
        speaker: '👧',
        text: 'Mas um dia a água ficou turva e com mau cheiro. Os peixes começaram a desaparecer. Zara ficou muito preocupada.',
        type: 'normal'
      },
      {
        illustration: '👧 🔍 🌊',
        text: 'Zara decidiu explorar o rio inteiro para descobrir o problema. Ela nadou muito, muito longe, até as margens da cidade...',
        type: 'normal'
      },
      {
        illustration: '👧 🗑️ 😠',
        speech: 'Isso está machucando nosso rio!',
        speaker: '👧',
        text: 'Encontrou pessoas jogando lixo direto no rio! Garrafas, sacolas plásticas e produtos químicos. Zara ficou com muita tristeza e raiva.',
        type: 'normal'
      },
      {
        illustration: '👧 💭 ✨',
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
        illustration: '👧 🌈 🐟',
        speech: 'Cuidar da água é cuidar da vida!',
        speaker: '👧',
        text: 'Depois da limpeza, o Rio Cristal voltou a brilhar! Os peixes voltaram, a água ficou limpa e Zara dançou feliz.',
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
    sceneBg: '#FFFCE6',
    totalPages: 6,
    pages: [
      {
        illustration: '🌸 🐝 ✨',
        text: 'Bela era uma abelhinha muito especial. Todos os dias ela saía voando de flor em flor, carregando poleninho dourado em suas patinhas peludas.',
        type: 'normal'
      },
      {
        illustration: '👦 🐝 🌸',
        speech: 'Abelha, para que você voa de flor em flor?',
        speaker: '👦',
        text: 'Um dia Tiago, um menino curioso, perguntou e Bela sorriu. Ela disse que ia mostrar para ele como funciona a magia das flores!',
        type: 'normal'
      },
      {
        illustration: '🐝 🌺 🍎',
        speech: 'Isso se chama polinização! Sem mim, as flores não viram frutas!',
        speaker: '🐝',
        text: 'Bela explicou: quando visita as flores, ela leva um pózinho dourado de uma para outra. É assim que as frutas nascem!',
        type: 'normal'
      },
      {
        illustration: '👦 🐝 🍎',
        speech: 'Maçã e morango precisam de você?',
        speaker: '👦',
        text: 'Tiago ficou surpreso! Bela balançou a cabeça: "Sim! E de todas as minhas irmãs abelhas! Sem nós, metade dos alimentos do mundo desapareceria."',
        type: 'normal'
      },
      {
        illustration: '👦 🌻 🌷',
        speech: 'O que posso fazer para ajudar as abelhas?',
        speaker: '👦',
        text: 'Tiago queria ajudar muito! O que você acha que ele deve fazer?',
        type: 'choice',
        choices: [
          { text: '🌱 Plantar flores coloridas no jardim de casa', next: 5 },
          { text: '🚫 Parar de usar venenos e pesticidas nas plantas', next: 5 }
        ]
      },
      {
        illustration: '🏡 🌸 🐝',
        text: 'Perfeito! Tiago plantou um jardim lindo cheio de flores coloridas. Logo Bela e suas irmãs vieram morar ali. A vida de Tiago ficou mais colorida e saborosa!',
        type: 'normal'
      }
    ]
  }
  ,
  {
    id: 'mar',
    title: 'O Mistério do Mar',
    description: 'Sofia, a tartaruga, e Pedro, o peixe, descobrem que o oceano está cheio de lixo. Podem salvá-lo?',
    icon: '🐢',
    gradient: 'linear-gradient(135deg,#B3E5FC,#0288D1)',
    sceneBg: '#D0F0FA',
    totalPages: 7,
    pages: [
      {
        illustration: '🌊 🐢 🐠',
        text: 'Sofia a tartaruga e Pedro o peixe viviam no Mar Azul, um oceano lindo e cheio de vida. Todos os dias nadavam entre corais coloridos e plantas marinhas.',
        type: 'normal'
      },
      {
        illustration: '🐢 😟 🛍️',
        speech: 'Isso não é uma água-viva! É plástico!',
        speaker: '🐢',
        text: 'Mas um dia Sofia encontrou algo estranho flutuando na água. Uma sacola plástica! Ela ficou assustada.',
        type: 'normal'
      },
      {
        illustration: '🐠 🗑️ 💔',
        speech: 'De onde vem todo esse lixo?',
        speaker: '🐠',
        text: 'Pedro também viu: garrafas, sacolas e lixo por todo o lado. Os corais estavam cobertos de plástico e os peixes estavam sumindo.',
        type: 'normal'
      },
      {
        illustration: '🏖️ 🗑️ 💨',
        text: 'O lixo vinha das praias e dos rios. As pessoas jogavam no chão, o vento levava para o rio, e o rio levava para o mar. Tudo estava conectado!',
        type: 'normal'
      },
      {
        illustration: '🐢 💭 🐠',
        text: 'Sofia e Pedro precisavam fazer algo urgente! O que você acha que eles devem fazer?',
        type: 'choice',
        choices: [
          { text: '🤝 Nadar até a praia e pedir ajuda a uma criança', next: 5 },
          { text: '📢 Alertar todos os animais do mar sobre o perigo', next: 5 }
        ]
      },
      {
        illustration: '👧 🌊 🧹',
        speech: 'Vou organizar um mutirão de limpeza da praia!',
        speaker: '👧',
        text: 'A menina Ana estava na praia quando viu Sofia na areia. Ela entendeu o recado e chamou toda a escola para limpar a praia!',
        type: 'normal'
      },
      {
        illustration: '🌊 🐢 🐠',
        speech: 'Obrigada, Ana! Cuide sempre do nosso mar!',
        speaker: '🐢',
        text: 'A praia ficou limpa, o mar voltou a ser azul e os corais renasceram. Sofia aprendeu: humanos e animais precisam cuidar do planeta juntos!',
        type: 'normal'
      }
    ]
  },
  {
    id: 'cidade',
    title: 'O Herói do Bairro',
    description: 'Léo quer transformar seu bairro cinzento num lugar mais verde e saudável. Será que consegue?',
    icon: '🌱',
    gradient: 'linear-gradient(135deg,#DCEDC8,#8BC34A)',
    sceneBg: '#F1F8E9',
    totalPages: 7,
    pages: [
      {
        illustration: '🏙️ 👦 😟',
        text: 'Léo morava numa cidade quente e cinzenta, com muito asfalto e pouca sombra. No verão, o calor era insuportável. Ele queria mudar isso!',
        type: 'normal'
      },
      {
        illustration: '👦 🌱 💡',
        speech: 'Vou transformar o terraço da nossa casa!',
        speaker: '👦',
        text: 'Um dia Léo teve uma ideia: e se transformasse o terraço vazio num jardim? Com sementes, terra e sol, tudo era possível!',
        type: 'normal'
      },
      {
        illustration: '👦 🌻 💧',
        text: 'Com paciência, Léo plantou tomates, alface e flores. Em poucas semanas as abelhas vieram, os pássaros apareceram e o calor diminuiu lá em casa!',
        type: 'normal'
      },
      {
        illustration: '👦 ♻️ 🏘️',
        speech: 'Cada um faz um pouco e o mundo muda!',
        speaker: '👦',
        text: 'Léo também juntou os amigos do bairro para criar um ponto de coleta de lixo reciclável na esquina. A vizinhança adorou a ideia!',
        type: 'normal'
      },
      {
        illustration: '👦 🌳 ✨',
        text: 'Agora Léo queria fazer ainda mais pelo bairro! O que você acha que ele deve fazer?',
        type: 'choice',
        choices: [
          { text: '🌳 Plantar árvores nas calçadas com os vizinhos', next: 5 },
          { text: '☀️ Convencer a escola a instalar painéis solares', next: 5 }
        ]
      },
      {
        illustration: '🌳 🏘️ 🌻',
        text: 'Com árvores nas calçadas, o bairro ficou mais fresco e bonito. Outros moradores viram o exemplo de Léo e também começaram seus próprios jardins!',
        type: 'normal'
      },
      {
        illustration: '👦 🌱 🌍',
        speech: 'Qualquer pessoa pode ser um herói verde!',
        speaker: '👦',
        text: 'Léo aprendeu que não precisa ser grande para fazer diferença. Pequenas atitudes — uma semente, um sorriso, uma ideia — podem mudar o mundo!',
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
    url: 'jogo-memoria.html'
  },
  {
    id: 'plantio',
    title: 'Simulador de Plantio',
    description: 'Plante sementes, regue e colha! Cuide do seu jardim virtual.',
    icon: '🌱',
    gradient: 'linear-gradient(135deg,#DCEDC8,#AED581)',
    difficulty: 'easy',
    url: 'jogo-plantio.html'
  },
  {
    id: 'ecossistemas',
    title: 'Quebra-Cabeça Ambiental',
    description: 'Classifique animais e plantas nos ecossistemas certos do Brasil!',
    icon: '🧩',
    gradient: 'linear-gradient(135deg,#B3E5FC,#4FC3F7)',
    difficulty: 'hard',
    url: 'jogo-ecossistemas.html'
  }
];

const RECYCLING_ITEMS = [
  { emoji: '📰', name: 'Jornal', category: 'papel', hint: 'Jornais são feitos de papel reciclável!' },
  { emoji: '📦', name: 'Caixa de papelão', category: 'papel', hint: 'Papelão vai na lixeira azul (papel)!' },
  { emoji: '🗞️', name: 'Revista', category: 'papel', hint: 'Revistas e livros vão no papel!' },
  { emoji: '✉️', name: 'Envelope', category: 'papel', hint: 'Envelopes são papel reciclável!' },
  { emoji: '🧴', name: 'Frasco de plástico', category: 'plastico', hint: 'Plástico demora séculos para sumir da natureza.' },
  { emoji: '🥤', name: 'Copo descartável', category: 'plastico', hint: 'Tente usar menos descartáveis!' },
  { emoji: '🛍️', name: 'Sacola plástica', category: 'plastico', hint: 'Sacolas plásticas demoram séculos para se decompor!' },
  { emoji: '🍶', name: 'Frasco de vidro', category: 'vidro', hint: 'Vidro pode ser reciclado infinitas vezes sem perder qualidade!' },
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
    check: s => ['floresta','rio','abelha','mar','cidade'].every(id => s.progress?.stories?.[id]?.completed)
  },
  {
    id: 'leitor_dedicado',
    icon: '🏆',
    title: 'Leitor Dedicado',
    desc: 'Todas as histórias com 3 estrelas',
    check: s => ['floresta','rio','abelha','mar','cidade'].every(id => (s.progress?.stories?.[id]?.stars || 0) >= 3)
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
