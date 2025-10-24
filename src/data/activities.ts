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
  {
    id: 'pt-003',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal', 'pre-escola'],
    title: 'Vogais e Consoantes',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte as vogais de azul e as consoantes de vermelho:',
      letters: ['A', 'B', 'E', 'C', 'I', 'D', 'O', 'F', 'U'],
    }
  },
  {
    id: 'pt-004',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['pre-escola', '1-ano'],
    title: 'Trace as Letras',
    difficulty: 'facil',
    content: {
      instructions: 'Trace as letras pontilhadas:',
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    }
  },
  
  // 1º ao 2º ano
  {
    id: 'pt-005',
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
        { word: 'M_S_', answer: 'MESA' },
        { word: 'P_P_', answer: 'PAPAI' },
      ]
    }
  },
  {
    id: 'pt-006',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['1-ano', '2-ano'],
    title: 'Família Silábica',
    difficulty: 'facil',
    content: {
      instructions: 'Complete as palavras com as sílabas corretas:',
      words: [
        { word: '__CA', options: ['BO', 'CA', 'MA'], answer: 'BO' }, // BOCA
        { word: 'SA__', options: ['PO', 'LA', 'TO'], answer: 'PO' }, // SAPO
        { word: '__TO', options: ['GA', 'PA', 'MA'], answer: 'GA' }, // GATO
      ]
    }
  },
  {
    id: 'pt-007',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['2-ano', '3-ano'],
    title: 'Plural e Singular',
    difficulty: 'medio',
    content: {
      instructions: 'Escreva o plural das palavras:',
      words: [
        { singular: 'gato', plural: 'gatos' },
        { singular: 'casa', plural: 'casas' },
        { singular: 'flor', plural: 'flores' },
        { singular: 'animal', plural: 'animais' },
        { singular: 'papel', plural: 'papéis' },
      ]
    }
  },
  
  // 3º ao 5º ano
  {
    id: 'pt-008',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Interpretação de Texto',
    difficulty: 'medio',
    content: {
      text: 'O Sol nasceu radiante naquela manhã de primavera. Os pássaros cantavam alegremente nas árvores do parque. Maria acordou cedo e decidiu fazer um piquenique com sua família. Preparou sanduíches, frutas e suco natural.',
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
  {
    id: 'pt-009',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['3-ano', '4-ano'],
    title: 'Sinônimos',
    difficulty: 'medio',
    content: {
      instructions: 'Ligue as palavras aos seus sinônimos:',
      pairs: [
        { word: 'feliz', synonym: 'alegre' },
        { word: 'bonito', synonym: 'belo' },
        { word: 'triste', synonym: 'melancólico' },
        { word: 'grande', synonym: 'enorme' },
        { word: 'pequeno', synonym: 'diminuto' },
      ]
    }
  },
  {
    id: 'pt-010',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['4-ano', '5-ano'],
    title: 'Acentuação Gráfica',
    difficulty: 'medio',
    content: {
      instructions: 'Coloque os acentos nas palavras que precisam:',
      words: [
        { word: 'cafe', answer: 'café' },
        { word: 'avô', answer: 'avô' },
        { word: 'onibus', answer: 'ônibus' },
        { word: 'lampada', answer: 'lâmpada' },
        { word: 'musica', answer: 'música' },
      ]
    }
  },
  
  // 6º ao 9º ano
  {
    id: 'pt-011',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['6-ano', '7-ano', '8-ano', '9-ano'],
    title: 'Análise Sintática',
    difficulty: 'dificil',
    content: {
      instructions: 'Identifique o sujeito e o predicado nas orações:',
      sentences: [
        { sentence: 'O menino brincava no parque.', subject: 'O menino', predicate: 'brincava no parque' },
        { sentence: 'Os alunos estudaram muito.', subject: 'Os alunos', predicate: 'estudaram muito' },
        { sentence: 'Maria e João viajaram ontem.', subject: 'Maria e João', predicate: 'viajaram ontem' },
      ]
    }
  },
  {
    id: 'pt-012',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['7-ano', '8-ano', '9-ano'],
    title: 'Figuras de Linguagem',
    difficulty: 'dificil',
    content: {
      instructions: 'Identifique a figura de linguagem em cada frase:',
      sentences: [
        { sentence: 'Aquela mulher é um anjo.', figure: 'Metáfora' },
        { sentence: 'A lua sorria no céu.', figure: 'Personificação' },
        { sentence: 'O vento sussurrava segredos.', figure: 'Personificação' },
      ]
    }
  },
  
  // Ensino Médio
  {
    id: 'pt-013',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['1-medio', '2-medio', '3-medio'],
    title: 'Literatura Brasileira',
    difficulty: 'dificil',
    content: {
      instructions: 'Relacione os autores com suas obras:',
      pairs: [
        { author: 'Machado de Assis', work: 'Dom Casmurro' },
        { author: 'José de Alencar', work: 'Iracema' },
        { author: 'Carlos Drummond de Andrade', work: 'Sentimento do Mundo' },
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
      shape: 'casa'
    }
  },
  {
    id: 'mt-003',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['pre-escola', '1-ano'],
    title: 'Contar até 10',
    difficulty: 'facil',
    content: {
      instructions: 'Conte os objetos e escreva o número:',
      items: [
        { objects: '⭐⭐⭐⭐⭐⭐', count: 6 },
        { objects: '🌸🌸🌸🌸🌸🌸🌸', count: 7 },
        { objects: '🦋🦋🦋🦋🦋🦋🦋🦋', count: 8 },
        { objects: '🐝🐝🐝🐝🐝🐝🐝🐝🐝', count: 9 },
        { objects: '🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼', count: 10 },
      ]
    }
  },
  
  // 1º ao 2º ano
  {
    id: 'mt-004',
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
        { problem: '7 + 3 = ', answer: 10 },
      ]
    }
  },
  {
    id: 'mt-005',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['1-ano', '2-ano'],
    title: 'Subtração Simples',
    difficulty: 'facil',
    content: {
      instructions: 'Resolva as contas de subtração:',
      problems: [
        { problem: '5 - 2 = ', answer: 3 },
        { problem: '8 - 3 = ', answer: 5 },
        { problem: '10 - 4 = ', answer: 6 },
        { problem: '7 - 1 = ', answer: 6 },
        { problem: '9 - 5 = ', answer: 4 },
      ]
    }
  },
  {
    id: 'mt-006',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['2-ano', '3-ano'],
    title: 'Problemas com Adição',
    difficulty: 'medio',
    content: {
      instructions: 'Resolva os problemas:',
      problems: [
        { problem: 'João tinha 5 bolas e ganhou mais 3. Quantas bolas ele tem agora?', answer: 8 },
        { problem: 'Maria colheu 12 flores pela manhã e 8 à tarde. Quantas flores ela colheu?', answer: 20 },
        { problem: 'Na sala há 15 meninos e 13 meninas. Quantos alunos há na sala?', answer: 28 },
      ]
    }
  },
  
  // 3º ao 5º ano
  {
    id: 'mt-007',
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
        { problem: '8 x 3 = ', answer: 24 },
      ]
    }
  },
  {
    id: 'mt-008',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['4-ano', '5-ano'],
    title: 'Divisão',
    difficulty: 'medio',
    content: {
      instructions: 'Resolva as divisões:',
      problems: [
        { problem: '12 ÷ 3 = ', answer: 4 },
        { problem: '20 ÷ 4 = ', answer: 5 },
        { problem: '18 ÷ 6 = ', answer: 3 },
        { problem: '24 ÷ 8 = ', answer: 3 },
        { problem: '30 ÷ 5 = ', answer: 6 },
      ]
    }
  },
  {
    id: 'mt-009',
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
  {
    id: 'mt-010',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['5-ano', '6-ano'],
    title: 'Porcentagem',
    difficulty: 'medio',
    content: {
      instructions: 'Calcule as porcentagens:',
      problems: [
        { problem: '10% de 100 = ', answer: 10 },
        { problem: '25% de 80 = ', answer: 20 },
        { problem: '50% de 60 = ', answer: 30 },
        { problem: '20% de 150 = ', answer: 30 },
      ]
    }
  },
  
  // 6º ao 9º ano
  {
    id: 'mt-011',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['6-ano', '7-ano'],
    title: 'Equações de 1º Grau',
    difficulty: 'medio',
    content: {
      instructions: 'Resolva as equações:',
      problems: [
        { problem: 'x + 5 = 12', answer: 'x = 7' },
        { problem: '2x = 18', answer: 'x = 9' },
        { problem: 'x - 4 = 10', answer: 'x = 14' },
        { problem: '3x + 2 = 11', answer: 'x = 3' },
      ]
    }
  },
  {
    id: 'mt-012',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['8-ano', '9-ano'],
    title: 'Equações de 2º Grau',
    difficulty: 'dificil',
    content: {
      instructions: 'Resolva as equações usando Bhaskara:',
      problems: [
        { problem: 'x² - 5x + 6 = 0', answer: 'x = 2 ou x = 3' },
        { problem: 'x² - 4 = 0', answer: 'x = -2 ou x = 2' },
        { problem: 'x² + 2x - 3 = 0', answer: 'x = -3 ou x = 1' },
      ]
    }
  },
  {
    id: 'mt-013',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['7-ano', '8-ano', '9-ano'],
    title: 'Geometria - Áreas',
    difficulty: 'medio',
    content: {
      instructions: 'Calcule a área das figuras:',
      problems: [
        { problem: 'Quadrado de lado 5cm', answer: '25 cm²' },
        { problem: 'Retângulo 8cm x 4cm', answer: '32 cm²' },
        { problem: 'Triângulo base 6cm altura 4cm', answer: '12 cm²' },
      ]
    }
  },
  
  // Ensino Médio
  {
    id: 'mt-014',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['1-medio', '2-medio', '3-medio'],
    title: 'Funções Quadráticas',
    difficulty: 'dificil',
    content: {
      instructions: 'Encontre o vértice da parábola:',
      problems: [
        { problem: 'f(x) = x² - 4x + 3', answer: 'V(2, -1)' },
        { problem: 'f(x) = -x² + 6x - 5', answer: 'V(3, 4)' },
      ]
    }
  },
  {
    id: 'mt-015',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['2-medio', '3-medio'],
    title: 'Trigonometria',
    difficulty: 'dificil',
    content: {
      instructions: 'Calcule os valores trigonométricos:',
      problems: [
        { problem: 'sen 30° = ', answer: '1/2' },
        { problem: 'cos 60° = ', answer: '1/2' },
        { problem: 'tan 45° = ', answer: '1' },
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

import {
  scienceActivities,
  historyActivities,
  geographyActivities,
  englishActivities,
  artsActivities,
  physicalEducationActivities,
  logicActivities,
  memoryActivities,
} from './additionalActivities';

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
    ...scienceActivities,
    ...historyActivities,
    ...geographyActivities,
    ...englishActivities,
    ...artsActivities,
    ...physicalEducationActivities,
    ...logicActivities,
    ...memoryActivities,
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