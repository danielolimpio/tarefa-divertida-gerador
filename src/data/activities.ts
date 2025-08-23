// Banco de dados de atividades educacionais

export interface Activity {
  id: string;
  type: string;
  subject: string;
  grade: string[];
  title: string;
  content: any;
  difficulty: 'facil' | 'medio' | 'dificil';
}

// Atividades de Português
export const portugueseActivities: Activity[] = [
  // Maternal e Pré-escola
  {
    id: 'pt-001',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal', 'pre-escola'],
    title: 'Reconhecimento de Vogais',
    difficulty: 'facil',
    content: {
      instructions: 'Circule todas as vogais A que você encontrar:',
      letters: ['A', 'B', 'A', 'C', 'A', 'D', 'E', 'A', 'F', 'A'],
    }
  },
  {
    id: 'pt-002',
    type: 'colorir',
    subject: 'portugues',
    grade: ['maternal', 'pre-escola'],
    title: 'Colorir as Letras',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte a letra A de vermelho e a letra E de azul:',
      letters: ['A', 'E', 'A', 'E', 'A'],
    }
  },
  
  // 1º ao 5º ano
  {
    id: 'pt-003',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['1-ano', '2-ano'],
    title: 'Complete as Palavras',
    difficulty: 'facil',
    content: {
      instructions: 'Complete as palavras com as vogais que faltam:',
      words: [
        { word: 'C_S_', answer: 'CASA' },
        { word: 'B_L_', answer: 'BOLA' },
        { word: 'G_T_', answer: 'GATO' },
        { word: 'P_T_', answer: 'PATO' },
      ]
    }
  },
  {
    id: 'pt-004',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Interpretação de Texto',
    difficulty: 'medio',
    content: {
      text: 'O Sol nasceu radiante naquela manhã de primavera. Os pássaros cantavam alegremente nas árvores do parque. Maria acordou cedo e decidiu fazer um piquenique com sua família.',
      questions: [
        {
          question: 'Como estava o Sol naquela manhã?',
          options: ['Escondido', 'Radiante', 'Fraco', 'Invisível'],
          answer: 'Radiante'
        },
        {
          question: 'Em que estação do ano aconteceu a história?',
          options: ['Verão', 'Outono', 'Inverno', 'Primavera'],
          answer: 'Primavera'
        },
        {
          question: 'O que Maria decidiu fazer?',
          options: ['Dormir mais', 'Fazer um piquenique', 'Estudar', 'Brincar'],
          answer: 'Fazer um piquenique'
        }
      ]
    }
  },
];

// Atividades de Matemática
export const mathActivities: Activity[] = [
  // Maternal e Pré-escola
  {
    id: 'mt-001',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal', 'pre-escola'],
    title: 'Contar até 5',
    difficulty: 'facil',
    content: {
      instructions: 'Conte os objetos e escreva o número:',
      items: [
        { objects: '🍎', count: 1 },
        { objects: '🍎🍎', count: 2 },
        { objects: '🍎🍎🍎', count: 3 },
        { objects: '🍎🍎🍎🍎', count: 4 },
        { objects: '🍎🍎🍎🍎🍎', count: 5 },
      ]
    }
  },
  {
    id: 'mt-002',
    type: 'ligar-pontos',
    subject: 'matematica',
    grade: ['maternal', 'pre-escola', '1-ano'],
    title: 'Ligue os Pontos de 1 a 10',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue os números em ordem para formar a figura:',
      maxNumber: 10,
      shape: 'casa' // Seria renderizado como pontos numerados formando uma casa
    }
  },
  
  // 1º ao 5º ano
  {
    id: 'mt-003',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['1-ano', '2-ano'],
    title: 'Adição Simples',
    difficulty: 'facil',
    content: {
      instructions: 'Resolva as contas de adição:',
      problems: [
        { problem: '2 + 3 = ', answer: 5 },
        { problem: '4 + 1 = ', answer: 5 },
        { problem: '3 + 2 = ', answer: 5 },
        { problem: '6 + 2 = ', answer: 8 },
        { problem: '5 + 4 = ', answer: 9 },
      ]
    }
  },
  {
    id: 'mt-004',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['3-ano', '4-ano'],
    title: 'Multiplicação',
    difficulty: 'medio',
    content: {
      instructions: 'Resolva as multiplicações:',
      problems: [
        { problem: '3 x 4 = ', answer: 12 },
        { problem: '5 x 2 = ', answer: 10 },
        { problem: '6 x 3 = ', answer: 18 },
        { problem: '7 x 2 = ', answer: 14 },
        { problem: '4 x 5 = ', answer: 20 },
      ]
    }
  },
  {
    id: 'mt-005',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['5-ano', '6-ano'],
    title: 'Frações',
    difficulty: 'medio',
    content: {
      instructions: 'Simplifique as frações:',
      problems: [
        { problem: '4/8 = ', answer: '1/2' },
        { problem: '6/9 = ', answer: '2/3' },
        { problem: '10/20 = ', answer: '1/2' },
        { problem: '15/30 = ', answer: '1/2' },
        { problem: '8/12 = ', answer: '2/3' },
      ]
    }
  },
];

// Atividades Lúdicas
export const ludicrousActivities: Activity[] = [
  {
    id: 'ld-001',
    type: 'cruzadinhas',
    subject: 'portugues',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Cruzadinha de Animais',
    difficulty: 'medio',
    content: {
      instructions: 'Complete a cruzadinha com nomes de animais:',
      grid: {
        size: { width: 10, height: 10 },
        words: [
          { word: 'GATO', start: [0, 0], direction: 'horizontal', hint: 'Felino doméstico' },
          { word: 'CACHORRO', start: [2, 0], direction: 'vertical', hint: 'Melhor amigo do homem' },
          { word: 'PASSARO', start: [4, 3], direction: 'horizontal', hint: 'Animal que voa' },
        ]
      }
    }
  },
  {
    id: 'ld-002',
    type: '7-erros',
    subject: 'logica',
    grade: ['1-ano', '2-ano', '3-ano', '4-ano', '5-ano'],
    title: 'Encontre os 7 Erros',
    difficulty: 'medio',
    content: {
      instructions: 'Compare as duas imagens e encontre as 7 diferenças:',
      imageType: 'parque', // Seria duas imagens de um parque com diferenças
      differences: 7
    }
  },
  {
    id: 'ld-003',
    type: 'labirintos',
    subject: 'logica',
    grade: ['pre-escola', '1-ano', '2-ano'],
    title: 'Ajude o Coelho',
    difficulty: 'facil',
    content: {
      instructions: 'Ajude o coelho a chegar até a cenoura:',
      mazeSize: 'pequeno',
      theme: 'coelho-cenoura'
    }
  },
  {
    id: 'ld-004',
    type: 'sequencias',
    subject: 'logica',
    grade: ['pre-escola', '1-ano', '2-ano'],
    title: 'Complete a Sequência',
    difficulty: 'facil',
    content: {
      instructions: 'Observe o padrão e complete a sequência:',
      sequences: [
        {
          pattern: ['🔴', '🔵', '🔴', '🔵', '?'],
          answer: '🔴'
        },
        {
          pattern: ['🌟', '🌟', '🌙', '🌟', '🌟', '?'],
          answer: '🌙'
        },
        {
          pattern: ['1', '2', '3', '4', '?'],
          answer: '5'
        }
      ]
    }
  },
];

// Atividades Adaptadas para Crianças Autistas
export const adaptedActivities: Activity[] = [
  {
    id: 'ad-001',
    type: 'adaptadas',
    subject: 'portugues',
    grade: ['maternal', 'pre-escola', '1-ano'],
    title: 'Cartões de Rotina',
    difficulty: 'facil',
    content: {
      instructions: 'Organize os cartões na ordem correta da rotina:',
      cards: [
        { image: '🛏️', text: 'ACORDAR', order: 1 },
        { image: '🚿', text: 'TOMAR BANHO', order: 2 },
        { image: '🍳', text: 'CAFÉ DA MANHÃ', order: 3 },
        { image: '🎒', text: 'IR PARA ESCOLA', order: 4 },
      ]
    }
  },
  {
    id: 'ad-002',
    type: 'adaptadas',
    subject: 'matematica',
    grade: ['maternal', 'pre-escola', '1-ano'],
    title: 'Associação de Cores',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue os objetos da mesma cor:',
      pairs: [
        { left: '🍎', right: '🔴', color: 'vermelho' },
        { left: '🌳', right: '🟢', color: 'verde' },
        { left: '☁️', right: '⚪', color: 'branco' },
        { left: '🌞', right: '🟡', color: 'amarelo' },
      ]
    }
  },
  {
    id: 'ad-003',
    type: 'adaptadas',
    subject: 'memoria',
    grade: ['maternal', 'pre-escola', '1-ano', '2-ano'],
    title: 'Sequência Visual',
    difficulty: 'facil',
    content: {
      instructions: 'Observe a sequência e depois repita:',
      sequence: ['👋', '👏', '🙌', '👋'],
      showTime: 5000, // Tempo em ms para mostrar a sequência
    }
  },
];

// Função para obter atividades filtradas
export function getActivities(filters: {
  grade?: string;
  subjects?: string[];
  types?: string[];
  count?: number;
}): Activity[] {
  const allActivities = [
    ...portugueseActivities,
    ...mathActivities,
    ...ludicrousActivities,
    ...adaptedActivities,
  ];
  
  let filtered = allActivities;
  
  // Filtrar por série
  if (filters.grade) {
    filtered = filtered.filter(activity => 
      activity.grade.includes(filters.grade!)
    );
  }
  
  // Filtrar por matérias
  if (filters.subjects && filters.subjects.length > 0) {
    filtered = filtered.filter(activity => 
      filters.subjects!.includes(activity.subject)
    );
  }
  
  // Filtrar por tipos
  if (filters.types && filters.types.length > 0) {
    filtered = filtered.filter(activity => 
      filters.types!.includes(activity.type)
    );
  }
  
  // Randomizar e limitar quantidade
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  
  if (filters.count) {
    return shuffled.slice(0, filters.count);
  }
  
  return shuffled;
}

// Função para gerar variações de atividades
export function generateActivityVariation(activity: Activity): Activity {
  const variation = { ...activity };
  
  // Gerar variações baseadas no tipo
  switch (activity.type) {
    case 'exercicios':
      if (activity.subject === 'matematica') {
        // Gerar novos problemas matemáticos
        const newProblems = generateMathProblems(activity.grade[0]);
        variation.content = { ...variation.content, problems: newProblems };
      }
      break;
      
    case 'sequencias':
      // Gerar novas sequências
      variation.content = { ...variation.content, sequences: generateSequences() };
      break;
  }
  
  return variation;
}

// Helpers para geração de conteúdo
function generateMathProblems(grade: string): any[] {
  const problems = [];
  const count = 5;
  
  switch (grade) {
    case '1-ano':
    case '2-ano':
      // Adição e subtração simples
      for (let i = 0; i < count; i++) {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        const operation = Math.random() > 0.5 ? '+' : '-';
        const answer = operation === '+' ? a + b : Math.max(a, b) - Math.min(a, b);
        problems.push({
          problem: `${Math.max(a, b)} ${operation} ${Math.min(a, b)} = `,
          answer
        });
      }
      break;
      
    case '3-ano':
    case '4-ano':
      // Multiplicação
      for (let i = 0; i < count; i++) {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        problems.push({
          problem: `${a} x ${b} = `,
          answer: a * b
        });
      }
      break;
  }
  
  return problems;
}

function generateSequences(): any[] {
  const patterns = [
    {
      pattern: ['🔺', '🔸', '🔺', '🔸', '?'],
      answer: '🔺'
    },
    {
      pattern: ['A', 'B', 'C', 'D', '?'],
      answer: 'E'
    },
    {
      pattern: ['2', '4', '6', '8', '?'],
      answer: '10'
    },
    {
      pattern: ['🌞', '🌙', '🌞', '🌙', '?'],
      answer: '🌞'
    },
    {
      pattern: ['🟦', '🟦', '🟥', '🟦', '🟦', '?'],
      answer: '🟥'
    }
  ];
  
  // Retornar 3 sequências aleatórias
  return patterns.sort(() => Math.random() - 0.5).slice(0, 3);
}