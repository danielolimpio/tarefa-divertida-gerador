import { Activity } from './activities';

// Atividades de Ciências
export const scienceActivities: Activity[] = [
  {
    id: 'ci-001',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['1-ano', '2-ano', '3-ano'],
    title: 'Partes do Corpo Humano',
    difficulty: 'facil',
    content: {
      instructions: 'Complete os nomes das partes do corpo:',
      parts: [
        { image: '👁️', name: 'olho' },
        { image: '👃', name: 'nariz' },
        { image: '👂', name: 'orelha' },
        { image: '👄', name: 'boca' },
        { image: '🖐️', name: 'mão' },
      ]
    }
  },
  {
    id: 'ci-002',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Cadeia Alimentar',
    difficulty: 'medio',
    content: {
      instructions: 'Organize a cadeia alimentar corretamente:',
      chain: [
        { level: 1, organism: 'Planta', type: 'Produtor' },
        { level: 2, organism: 'Gafanhoto', type: 'Consumidor Primário' },
        { level: 3, organism: 'Sapo', type: 'Consumidor Secundário' },
        { level: 4, organism: 'Cobra', type: 'Consumidor Terciário' },
      ]
    }
  },
  {
    id: 'ci-003',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['4-ano', '5-ano', '6-ano'],
    title: 'Estados Físicos da Água',
    difficulty: 'medio',
    content: {
      instructions: 'Identifique os estados físicos da água:',
      questions: [
        { question: 'A água do rio está em que estado?', answer: 'Líquido' },
        { question: 'O gelo está em que estado?', answer: 'Sólido' },
        { question: 'O vapor d\'água está em que estado?', answer: 'Gasoso' },
      ]
    }
  },
  {
    id: 'ci-004',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['6-ano', '7-ano'],
    title: 'Sistema Solar',
    difficulty: 'medio',
    content: {
      instructions: 'Ordene os planetas do Sistema Solar:',
      planets: ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']
    }
  },
  {
    id: 'ci-005',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['7-ano', '8-ano', '9-ano'],
    title: 'Fotossíntese',
    difficulty: 'medio',
    content: {
      instructions: 'Complete a equação da fotossíntese:',
      equation: '6CO₂ + 6H₂O + luz solar → C₆H₁₂O₆ + 6O₂',
      questions: [
        { question: 'O que as plantas absorvem?', answer: 'CO₂ e H₂O' },
        { question: 'O que as plantas produzem?', answer: 'Glicose e Oxigênio' },
      ]
    }
  },
  {
    id: 'ci-006',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['8-ano', '9-ano'],
    title: 'Leis de Newton',
    difficulty: 'dificil',
    content: {
      instructions: 'Identifique qual Lei de Newton está sendo aplicada:',
      situations: [
        { situation: 'Um carro em movimento continua em movimento', law: '1ª Lei (Inércia)' },
        { situation: 'F = m × a', law: '2ª Lei (Força)' },
        { situation: 'Ação e reação', law: '3ª Lei' },
      ]
    }
  },
];

// Atividades de História
export const historyActivities: Activity[] = [
  {
    id: 'hi-001',
    type: 'exercicios',
    subject: 'historia',
    grade: ['2-ano', '3-ano', '4-ano'],
    title: 'Linha do Tempo Pessoal',
    difficulty: 'facil',
    content: {
      instructions: 'Organize os eventos em ordem cronológica:',
      events: [
        { event: 'Nascimento', age: '0 anos' },
        { event: 'Primeiro dia na escola', age: '6 anos' },
        { event: 'Aprendeu a ler', age: '7 anos' },
      ]
    }
  },
  {
    id: 'hi-002',
    type: 'exercicios',
    subject: 'historia',
    grade: ['4-ano', '5-ano'],
    title: 'Descobrimento do Brasil',
    difficulty: 'medio',
    content: {
      instructions: 'Responda sobre o Descobrimento do Brasil:',
      questions: [
        { question: 'Em que ano o Brasil foi descoberto?', answer: '1500' },
        { question: 'Quem comandava a expedição?', answer: 'Pedro Álvares Cabral' },
        { question: 'Onde eles desembarcaram primeiro?', answer: 'Porto Seguro (Bahia)' },
      ]
    }
  },
  {
    id: 'hi-003',
    type: 'exercicios',
    subject: 'historia',
    grade: ['6-ano', '7-ano'],
    title: 'Brasil Colônia',
    difficulty: 'medio',
    content: {
      instructions: 'Complete as informações sobre o Brasil Colônia:',
      topics: [
        { topic: 'Principal produto de exportação', answer: 'Pau-brasil' },
        { topic: 'Tipo de trabalho utilizado', answer: 'Escravidão' },
        { topic: 'Sistema de divisão de terras', answer: 'Capitanias Hereditárias' },
      ]
    }
  },
  {
    id: 'hi-004',
    type: 'exercicios',
    subject: 'historia',
    grade: ['7-ano', '8-ano'],
    title: 'Independência do Brasil',
    difficulty: 'medio',
    content: {
      instructions: 'Responda sobre a Independência:',
      questions: [
        { question: 'Em que ano ocorreu?', answer: '1822' },
        { question: 'Quem proclamou a independência?', answer: 'Dom Pedro I' },
        { question: 'Onde foi proclamada?', answer: 'Às margens do Rio Ipiranga' },
      ]
    }
  },
  {
    id: 'hi-005',
    type: 'exercicios',
    subject: 'historia',
    grade: ['8-ano', '9-ano'],
    title: 'República no Brasil',
    difficulty: 'medio',
    content: {
      instructions: 'Identifique os períodos da República:',
      periods: [
        { period: 'República Velha', years: '1889-1930' },
        { period: 'Era Vargas', years: '1930-1945' },
        { period: 'República Nova', years: '1946-1964' },
        { period: 'Ditadura Militar', years: '1964-1985' },
      ]
    }
  },
];

// Atividades de Geografia
export const geographyActivities: Activity[] = [
  {
    id: 'ge-001',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['1-ano', '2-ano', '3-ano'],
    title: 'Pontos Cardeais',
    difficulty: 'facil',
    content: {
      instructions: 'Complete os pontos cardeais:',
      directions: [
        { symbol: 'N', name: 'Norte' },
        { symbol: 'S', name: 'Sul' },
        { symbol: 'L', name: 'Leste' },
        { symbol: 'O', name: 'Oeste' },
      ]
    }
  },
  {
    id: 'ge-002',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Regiões do Brasil',
    difficulty: 'medio',
    content: {
      instructions: 'Identifique as 5 regiões do Brasil:',
      regions: [
        { name: 'Norte', states: 7 },
        { name: 'Nordeste', states: 9 },
        { name: 'Centro-Oeste', states: 4 },
        { name: 'Sudeste', states: 4 },
        { name: 'Sul', states: 3 },
      ]
    }
  },
  {
    id: 'ge-003',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['4-ano', '5-ano', '6-ano'],
    title: 'Capitais Brasileiras',
    difficulty: 'medio',
    content: {
      instructions: 'Complete com as capitais dos estados:',
      states: [
        { state: 'São Paulo', capital: 'São Paulo' },
        { state: 'Rio de Janeiro', capital: 'Rio de Janeiro' },
        { state: 'Bahia', capital: 'Salvador' },
        { state: 'Minas Gerais', capital: 'Belo Horizonte' },
        { state: 'Pernambuco', capital: 'Recife' },
      ]
    }
  },
  {
    id: 'ge-004',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['6-ano', '7-ano'],
    title: 'Relevo Brasileiro',
    difficulty: 'medio',
    content: {
      instructions: 'Identifique as formas de relevo:',
      forms: [
        { form: 'Montanha', characteristic: 'Grande elevação' },
        { form: 'Planalto', characteristic: 'Terreno elevado e plano' },
        { form: 'Planície', characteristic: 'Terreno baixo e plano' },
        { form: 'Vale', characteristic: 'Depressão entre montanhas' },
      ]
    }
  },
  {
    id: 'ge-005',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['7-ano', '8-ano', '9-ano'],
    title: 'Clima do Brasil',
    difficulty: 'medio',
    content: {
      instructions: 'Identifique os tipos de clima:',
      climates: [
        { type: 'Equatorial', region: 'Região Norte' },
        { type: 'Tropical', region: 'Centro e Nordeste' },
        { type: 'Semiárido', region: 'Sertão nordestino' },
        { type: 'Subtropical', region: 'Região Sul' },
      ]
    }
  },
];

// Atividades de Inglês
export const englishActivities: Activity[] = [
  {
    id: 'in-001',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['1-ano', '2-ano', '3-ano'],
    title: 'Cores em Inglês',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome das cores em inglês:',
      colors: [
        { color: 'Vermelho', english: 'Red' },
        { color: 'Azul', english: 'Blue' },
        { color: 'Amarelo', english: 'Yellow' },
        { color: 'Verde', english: 'Green' },
        { color: 'Preto', english: 'Black' },
      ]
    }
  },
  {
    id: 'in-002',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['2-ano', '3-ano', '4-ano'],
    title: 'Números em Inglês',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva os números por extenso em inglês:',
      numbers: [
        { number: 1, english: 'One' },
        { number: 2, english: 'Two' },
        { number: 3, english: 'Three' },
        { number: 4, english: 'Four' },
        { number: 5, english: 'Five' },
        { number: 10, english: 'Ten' },
      ]
    }
  },
  {
    id: 'in-003',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['4-ano', '5-ano', '6-ano'],
    title: 'Verbo To Be',
    difficulty: 'medio',
    content: {
      instructions: 'Complete com am, is ou are:',
      sentences: [
        { sentence: 'I ___ a student', answer: 'am' },
        { sentence: 'She ___ beautiful', answer: 'is' },
        { sentence: 'They ___ happy', answer: 'are' },
        { sentence: 'We ___ friends', answer: 'are' },
      ]
    }
  },
  {
    id: 'in-004',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['6-ano', '7-ano', '8-ano'],
    title: 'Simple Present',
    difficulty: 'medio',
    content: {
      instructions: 'Complete as frases no Simple Present:',
      sentences: [
        { sentence: 'I ___ (play) soccer', answer: 'play' },
        { sentence: 'She ___ (study) English', answer: 'studies' },
        { sentence: 'They ___ (watch) TV', answer: 'watch' },
      ]
    }
  },
  {
    id: 'in-005',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['8-ano', '9-ano', '1-medio'],
    title: 'Past Simple',
    difficulty: 'medio',
    content: {
      instructions: 'Passe as frases para o passado:',
      sentences: [
        { present: 'I go to school', past: 'I went to school' },
        { present: 'She eats pizza', past: 'She ate pizza' },
        { present: 'They play games', past: 'They played games' },
      ]
    }
  },
];

// Atividades de Artes
export const artsActivities: Activity[] = [
  {
    id: 'ar-001',
    type: 'colorir',
    subject: 'artes',
    grade: ['maternal', 'pre-escola', '1-ano'],
    title: 'Colorir o Arco-Íris',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte cada faixa do arco-íris com a cor correta:',
      colors: ['Vermelho', 'Laranja', 'Amarelo', 'Verde', 'Azul', 'Anil', 'Violeta']
    }
  },
  {
    id: 'ar-002',
    type: 'exercicios',
    subject: 'artes',
    grade: ['2-ano', '3-ano', '4-ano'],
    title: 'Cores Primárias',
    difficulty: 'facil',
    content: {
      instructions: 'Identifique as cores primárias:',
      colors: ['Vermelho', 'Azul', 'Amarelo'],
      question: 'Quais são as cores que não podem ser formadas pela mistura de outras cores?'
    }
  },
  {
    id: 'ar-003',
    type: 'exercicios',
    subject: 'artes',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Mistura de Cores',
    difficulty: 'medio',
    content: {
      instructions: 'Qual cor resulta da mistura?',
      mixtures: [
        { color1: 'Azul', color2: 'Amarelo', result: 'Verde' },
        { color1: 'Vermelho', color2: 'Amarelo', result: 'Laranja' },
        { color1: 'Vermelho', color2: 'Azul', result: 'Roxo' },
      ]
    }
  },
  {
    id: 'ar-004',
    type: 'exercicios',
    subject: 'artes',
    grade: ['5-ano', '6-ano', '7-ano'],
    title: 'Movimentos Artísticos',
    difficulty: 'medio',
    content: {
      instructions: 'Relacione os artistas com seus movimentos:',
      pairs: [
        { artist: 'Leonardo da Vinci', movement: 'Renascimento' },
        { artist: 'Pablo Picasso', movement: 'Cubismo' },
        { artist: 'Vincent van Gogh', movement: 'Pós-Impressionismo' },
      ]
    }
  },
];

// Atividades de Educação Física
export const physicalEducationActivities: Activity[] = [
  {
    id: 'ef-001',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['1-ano', '2-ano', '3-ano'],
    title: 'Partes do Corpo em Movimento',
    difficulty: 'facil',
    content: {
      instructions: 'Identifique qual parte do corpo usamos em cada esporte:',
      sports: [
        { sport: 'Futebol', part: 'Pés' },
        { sport: 'Basquete', part: 'Mãos' },
        { sport: 'Natação', part: 'Corpo todo' },
      ]
    }
  },
  {
    id: 'ef-002',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Regras dos Esportes',
    difficulty: 'medio',
    content: {
      instructions: 'Responda sobre as regras:',
      questions: [
        { question: 'Quantos jogadores tem um time de futebol?', answer: '11 jogadores' },
        { question: 'Quantos pontos vale uma cesta de 3 no basquete?', answer: '3 pontos' },
        { question: 'Qual é o equipamento principal do tênis de mesa?', answer: 'Raquete e bolinha' },
      ]
    }
  },
];

// Atividades de Lógica
export const logicActivities: Activity[] = [
  {
    id: 'lo-001',
    type: 'sequencias',
    subject: 'logica',
    grade: ['pre-escola', '1-ano', '2-ano'],
    title: 'Complete a Sequência',
    difficulty: 'facil',
    content: {
      instructions: 'Observe o padrão e complete:',
      sequences: [
        { pattern: ['🔴', '🔵', '🔴', '🔵', '?'], answer: '🔴' },
        { pattern: ['⭐', '⭐', '🌙', '⭐', '⭐', '?'], answer: '🌙' },
        { pattern: ['1', '2', '3', '4', '?'], answer: '5' },
      ]
    }
  },
  {
    id: 'lo-002',
    type: 'exercicios',
    subject: 'logica',
    grade: ['3-ano', '4-ano', '5-ano'],
    title: 'Enigmas Lógicos',
    difficulty: 'medio',
    content: {
      instructions: 'Resolva os enigmas:',
      riddles: [
        { riddle: 'Tenho dentes mas não mordo. O que sou?', answer: 'Pente' },
        { riddle: 'O que é, o que é: cai em pé e corre deitado?', answer: 'Chuva' },
        { riddle: 'Tem coroa mas não é rei, tem escamas mas não é peixe?', answer: 'Abacaxi' },
      ]
    }
  },
];

// Atividades de Memória
export const memoryActivities: Activity[] = [
  {
    id: 'me-001',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal', 'pre-escola', '1-ano'],
    title: 'Jogo da Memória - Animais',
    difficulty: 'facil',
    content: {
      instructions: 'Encontre os pares de animais:',
      pairs: [
        { item: '🐶', pair: '🐶' },
        { item: '🐱', pair: '🐱' },
        { item: '🐰', pair: '🐰' },
        { item: '🦁', pair: '🦁' },
      ]
    }
  },
  {
    id: 'me-002',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['2-ano', '3-ano', '4-ano'],
    title: 'Sequência de Números',
    difficulty: 'medio',
    content: {
      instructions: 'Memorize e repita a sequência:',
      sequences: [
        { sequence: [1, 3, 5, 7], time: 5 },
        { sequence: [2, 4, 6, 8, 10], time: 5 },
      ]
    }
  },
];
