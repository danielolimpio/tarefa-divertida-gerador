import { Activity } from './activities';

// 10 Atividades de Português para Maternal
export const portuguesMaternal: Activity[] = [
  {
    id: 'pt-mat-001',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Reconhecer a Letra A',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte todos os desenhos que começam com a letra A:',
      items: ['🍎 Abelha', '🚗 Carro', '🦅 Águia', '🌳 Árvore', '⚓ Âncora']
    }
  },
  {
    id: 'pt-mat-002',
    type: 'colorir',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Colorir a Vogal A',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte a letra A com sua cor favorita:',
      letters: ['A', 'A', 'A', 'A', 'A']
    }
  },
  {
    id: 'pt-mat-003',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Vogal E',
    difficulty: 'facil',
    content: {
      instructions: 'Circule a letra E em cada palavra:',
      words: ['ELEFANTE', 'ESTRELA', 'ESCOLA', 'ESPADA']
    }
  },
  {
    id: 'pt-mat-004',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Vogal I',
    difficulty: 'facil',
    content: {
      instructions: 'Trace a letra I pontilhada:',
      items: ['I', 'I', 'I', 'I', 'I', 'I', 'I', 'I']
    }
  },
  {
    id: 'pt-mat-005',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Vogal O',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe objetos que começam com a letra O:',
      prompts: ['Ovo', 'Olho', 'Ônibus', 'Ovelha']
    }
  },
  {
    id: 'pt-mat-006',
    type: 'colorir',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Vogal U',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte a letra U de azul:',
      letters: ['U', 'U', 'U', 'U', 'U']
    }
  },
  {
    id: 'pt-mat-007',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Todas as Vogais',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue as vogais iguais:',
      pairs: [
        { left: 'A', right: 'a' },
        { left: 'E', right: 'e' },
        { left: 'I', right: 'i' },
        { left: 'O', right: 'o' },
        { left: 'U', right: 'u' }
      ]
    }
  },
  {
    id: 'pt-mat-008',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Meu Nome',
    difficulty: 'facil',
    content: {
      instructions: 'Trace as letras do seu nome (peça ajuda se necessário):',
      items: ['_ _ _ _ _', '_ _ _ _ _', '_ _ _ _ _']
    }
  },
  {
    id: 'pt-mat-009',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Sons Iniciais',
    difficulty: 'facil',
    content: {
      instructions: 'Circule os desenhos que começam com o mesmo som de BOLA:',
      items: ['🍌 Banana', '🐱 Gato', '🦋 Borboleta', '🚲 Bicicleta', '🌺 Flor']
    }
  },
  {
    id: 'pt-mat-010',
    type: 'colorir',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Alfabeto Ilustrado',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte as primeiras 5 letras do alfabeto:',
      letters: ['A', 'B', 'C', 'D', 'E']
    }
  }
];

// 10 Atividades de Matemática para Maternal
export const matematicaMaternal: Activity[] = [
  {
    id: 'mat-mat-001',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Contar até 3',
    difficulty: 'facil',
    content: {
      instructions: 'Conte os objetos e circule o número correto:',
      items: [
        { objects: '🍎🍎🍎', options: [1, 2, 3] },
        { objects: '⭐⭐', options: [1, 2, 3] },
        { objects: '🚗', options: [1, 2, 3] }
      ]
    }
  },
  {
    id: 'mat-mat-002',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Número 1',
    difficulty: 'facil',
    content: {
      instructions: 'Trace o número 1:',
      numbers: ['1', '1', '1', '1', '1', '1']
    }
  },
  {
    id: 'mat-mat-003',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Número 2',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe 2 flores:',
      prompts: ['Flor 1:', 'Flor 2:']
    }
  },
  {
    id: 'mat-mat-004',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Número 3',
    difficulty: 'facil',
    content: {
      instructions: 'Cole 3 adesivos ou desenhe 3 estrelas:',
      spaces: ['⭐', '⭐', '⭐']
    }
  },
  {
    id: 'mat-mat-005',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Grande e Pequeno',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o objeto GRANDE de azul e o PEQUENO de vermelho:',
      items: ['🐘 Grande', '🐭 Pequeno']
    }
  },
  {
    id: 'mat-mat-006',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Mais e Menos',
    difficulty: 'facil',
    content: {
      instructions: 'Circule onde tem MAIS objetos:',
      comparisons: [
        { group1: '🍎🍎', group2: '🍎🍎🍎' },
        { group1: '⭐⭐⭐', group2: '⭐' }
      ]
    }
  },
  {
    id: 'mat-mat-007',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Formas: Círculo',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte todos os CÍRCULOS:',
      shapes: ['⭕', '⬛', '⭕', '🔺', '⭕']
    }
  },
  {
    id: 'mat-mat-008',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Formas: Quadrado',
    difficulty: 'facil',
    content: {
      instructions: 'Trace o QUADRADO:',
      shapes: ['⬛', '⬛', '⬛']
    }
  },
  {
    id: 'mat-mat-009',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Sequência Numérica',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue os números na ordem: 1 → 2 → 3',
      sequence: ['1', '2', '3']
    }
  },
  {
    id: 'mat-mat-010',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Quantos São?',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe a quantidade de objetos indicada:',
      items: [
        { number: 1, object: 'sol ☀️' },
        { number: 2, object: 'árvores 🌳' },
        { number: 3, object: 'flores 🌸' }
      ]
    }
  }
];

// 10 Atividades de Ciências para Maternal
export const cienciasMaternal: Activity[] = [
  {
    id: 'ci-mat-001',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Partes do Corpo',
    difficulty: 'facil',
    content: {
      instructions: 'Aponte e nomeie as partes do corpo:',
      parts: ['👁️ Olhos', '👃 Nariz', '👂 Orelha', '👄 Boca', '🖐️ Mão']
    }
  },
  {
    id: 'ci-mat-002',
    type: 'colorir',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Cinco Sentidos',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte os órgãos dos sentidos:',
      items: ['👁️ Ver', '👂 Ouvir', '👃 Cheirar', '👅 Saborear', '🖐️ Tocar']
    }
  },
  {
    id: 'ci-mat-003',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Animais Domésticos',
    difficulty: 'facil',
    content: {
      instructions: 'Circule os animais que vivem em casa:',
      animals: ['🐶 Cachorro', '🦁 Leão', '🐱 Gato', '🐘 Elefante', '🐠 Peixe']
    }
  },
  {
    id: 'ci-mat-004',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Animais da Fazenda',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte os animais da fazenda:',
      animals: ['🐄 Vaca', '🐷 Porco', '🐔 Galinha', '🐴 Cavalo']
    }
  },
  {
    id: 'ci-mat-005',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Plantas',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe uma planta com: raiz, caule, folhas e flor',
      parts: ['Raiz', 'Caule', 'Folhas', 'Flor']
    }
  },
  {
    id: 'ci-mat-006',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Dia e Noite',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o SOL de amarelo e a LUA de cinza:',
      items: ['☀️ Dia', '🌙 Noite']
    }
  },
  {
    id: 'ci-mat-007',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Clima',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue o clima ao desenho correto:',
      pairs: [
        { weather: '☀️ Sol', item: 'Óculos' },
        { weather: '☔ Chuva', item: 'Guarda-chuva' },
        { weather: '❄️ Frio', item: 'Casaco' }
      ]
    }
  },
  {
    id: 'ci-mat-008',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Frutas',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte as frutas que você conhece:',
      fruits: ['🍎 Maçã', '🍌 Banana', '🍊 Laranja', '🍇 Uva']
    }
  },
  {
    id: 'ci-mat-009',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Água',
    difficulty: 'facil',
    content: {
      instructions: 'Circule onde encontramos água:',
      items: ['💧 Torneira', '🌊 Rio', '☔ Chuva', '🏔️ Montanha']
    }
  },
  {
    id: 'ci-mat-010',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Higiene',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe objetos de higiene pessoal:',
      items: ['Sabonete', 'Escova de dentes', 'Toalha']
    }
  }
];

// 10 Atividades de História para Maternal
export const historiaMaternal: Activity[] = [
  {
    id: 'hi-mat-001',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Minha Família',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe sua família:',
      prompts: ['Mamãe', 'Papai', 'Irmão(ã)', 'Você']
    }
  },
  {
    id: 'hi-mat-002',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Minha Casa',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe sua casa:',
      elements: ['Porta', 'Janelas', 'Telhado']
    }
  },
  {
    id: 'hi-mat-003',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Ontem e Hoje',
    difficulty: 'facil',
    content: {
      instructions: 'O que você fez ontem? Desenhe:',
      prompts: ['Manhã:', 'Tarde:', 'Noite:']
    }
  },
  {
    id: 'hi-mat-004',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Eu Cresci',
    difficulty: 'facil',
    content: {
      instructions: 'Cole uma foto de quando você era bebê e desenhe você agora:',
      spaces: ['Bebê:', 'Agora:']
    }
  },
  {
    id: 'hi-mat-005',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Profissões',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue cada profissional ao seu objeto de trabalho:',
      pairs: [
        { person: '👨‍⚕️ Médico', tool: '💊 Remédio' },
        { person: '👨‍🍳 Cozinheiro', tool: '🍳 Panela' },
        { person: '👨‍🏫 Professor', tool: '📚 Livro' }
      ]
    }
  },
  {
    id: 'hi-mat-006',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Dias da Semana',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o dia de hoje:',
      days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    }
  },
  {
    id: 'hi-mat-007',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Meios de Transporte Antigos',
    difficulty: 'facil',
    content: {
      instructions: 'Circule como as pessoas viajavam antigamente:',
      items: ['🐴 Cavalo', '🚂 Trem', '🚗 Carro', '⛵ Barco']
    }
  },
  {
    id: 'hi-mat-008',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Festas Tradicionais',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe sua festa favorita:',
      options: ['Aniversário 🎂', 'Natal 🎄', 'Páscoa 🐰']
    }
  },
  {
    id: 'hi-mat-009',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Minha Escola',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe sua sala de aula:',
      items: ['Mesa do professor', 'Carteiras', 'Quadro']
    }
  },
  {
    id: 'hi-mat-010',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Brinquedos de Ontem',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte os brinquedos:',
      toys: ['🪀 Pião', '🪁 Pipa', '🎱 Bola', '🧸 Urso']
    }
  }
];

// 10 Atividades de Geografia para Maternal
export const geografiaMaternal: Activity[] = [
  {
    id: 'ge-mat-001',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Dentro e Fora',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe uma bola DENTRO da caixa e outra FORA:',
      spaces: ['Dentro:', 'Fora:']
    }
  },
  {
    id: 'ge-mat-002',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Em Cima e Embaixo',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o pássaro que está EM CIMA da árvore:',
      items: ['🐦 Em cima', '🌳 Árvore', '🐛 Embaixo']
    }
  },
  {
    id: 'ge-mat-003',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Perto e Longe',
    difficulty: 'facil',
    content: {
      instructions: 'Circule o que está PERTO de você agora:',
      items: ['Lápis', 'Borracha', 'Caderno', 'Mochila']
    }
  },
  {
    id: 'ge-mat-004',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Meu Caminho',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe o caminho da sua casa até a escola:',
      elements: ['🏠 Casa', '➡️ Caminho', '🏫 Escola']
    }
  },
  {
    id: 'ge-mat-005',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Lugares da Cidade',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte os lugares que você conhece:',
      places: ['🏫 Escola', '🏪 Mercado', '🏥 Hospital', '⛪ Igreja']
    }
  },
  {
    id: 'ge-mat-006',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Campo e Cidade',
    difficulty: 'facil',
    content: {
      instructions: 'Circule o que você vê na CIDADE:',
      items: ['🏢 Prédios', '🐄 Vacas', '🚗 Carros', '🌾 Plantação']
    }
  },
  {
    id: 'ge-mat-007',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Elementos da Natureza',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe elementos da natureza:',
      items: ['Sol ☀️', 'Nuvem ☁️', 'Chuva 🌧️', 'Arco-íris 🌈']
    }
  },
  {
    id: 'ge-mat-008',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Água na Natureza',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte onde encontramos água:',
      items: ['🌊 Mar', '🏞️ Rio', '💧 Chuva', '⛲ Fonte']
    }
  },
  {
    id: 'ge-mat-009',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Minha Rua',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe sua rua com casas e árvores:',
      elements: ['Casas', 'Árvores', 'Rua']
    }
  },
  {
    id: 'ge-mat-010',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Cores da Natureza',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte cada elemento com sua cor natural:',
      items: ['🌳 Verde (árvore)', '☀️ Amarelo (sol)', '🌊 Azul (mar)']
    }
  }
];

// 10 Atividades de Inglês para Maternal
export const inglesMaternal: Activity[] = [
  {
    id: 'in-mat-001',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Colors - Red',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte de vermelho (RED):',
      items: ['🍎 Apple', '❤️ Heart', '🌹 Rose']
    }
  },
  {
    id: 'in-mat-002',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Colors - Blue',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte de azul (BLUE):',
      items: ['🌊 Sea', '🦋 Butterfly', '☁️ Sky']
    }
  },
  {
    id: 'in-mat-003',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Colors - Yellow',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte de amarelo (YELLOW):',
      items: ['☀️ Sun', '🍌 Banana', '⭐ Star']
    }
  },
  {
    id: 'in-mat-004',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Numbers - One',
    difficulty: 'facil',
    content: {
      instructions: 'Trace o número ONE (1):',
      numbers: ['1', '1', '1']
    }
  },
  {
    id: 'in-mat-005',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Numbers - Two',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe TWO (2) objetos:',
      items: ['Object 1:', 'Object 2:']
    }
  },
  {
    id: 'in-mat-006',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Animals - Dog',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o cachorro e escreva DOG:',
      word: 'D O G',
      image: '🐶'
    }
  },
  {
    id: 'in-mat-007',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Animals - Cat',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o gato e escreva CAT:',
      word: 'C A T',
      image: '🐱'
    }
  },
  {
    id: 'in-mat-008',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Hello and Goodbye',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue as palavras às figuras:',
      pairs: [
        { word: 'HELLO', action: '👋 Acenar (olá)' },
        { word: 'GOODBYE', action: '👋 Acenar (tchau)' }
      ]
    }
  },
  {
    id: 'in-mat-009',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Family - Mom and Dad',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe sua MOM (mamãe) e seu DAD (papai):',
      spaces: ['MOM:', 'DAD:']
    }
  },
  {
    id: 'in-mat-010',
    type: 'colorir',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Rainbow Colors',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o arco-íris (RAINBOW):',
      colors: ['RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE']
    }
  }
];

// 10 Atividades de Artes para Maternal
export const artesMaternal: Activity[] = [
  {
    id: 'ar-mat-001',
    type: 'colorir',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Desenho Livre',
    difficulty: 'facil',
    content: {
      instructions: 'Faça um desenho livre do que você mais gosta:',
      space: 'Grande área para desenho livre'
    }
  },
  {
    id: 'ar-mat-002',
    type: 'colorir',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Pintura com Dedos',
    difficulty: 'facil',
    content: {
      instructions: 'Use seus dedos para pintar bolinhas coloridas:',
      technique: 'Pintura digital'
    }
  },
  {
    id: 'ar-mat-003',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Colagem',
    difficulty: 'facil',
    content: {
      instructions: 'Cole papéis coloridos para fazer uma árvore:',
      materials: ['Papel marrom (tronco)', 'Papel verde (folhas)']
    }
  },
  {
    id: 'ar-mat-004',
    type: 'colorir',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Círculos Coloridos',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte cada círculo de uma cor diferente:',
      circles: ['⭕', '⭕', '⭕', '⭕', '⭕']
    }
  },
  {
    id: 'ar-mat-005',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Minha Mão',
    difficulty: 'facil',
    content: {
      instructions: 'Contorne sua mão e decore:',
      activity: 'Traçar mão e decorar'
    }
  },
  {
    id: 'ar-mat-006',
    type: 'colorir',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Sol e Nuvens',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe e pinte um sol amarelo e nuvens brancas:',
      elements: ['☀️ Sol', '☁️ Nuvens']
    }
  },
  {
    id: 'ar-mat-007',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Carimbo de Batata',
    difficulty: 'facil',
    content: {
      instructions: 'Use carimbos para fazer desenhos (pode ser com esponja):',
      technique: 'Carimbos'
    }
  },
  {
    id: 'ar-mat-008',
    type: 'colorir',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Borboleta Simétrica',
    difficulty: 'facil',
    content: {
      instructions: 'Dobre o papel e pinte uma asa da borboleta, depois desdobre:',
      technique: 'Pintura simétrica'
    }
  },
  {
    id: 'ar-mat-009',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Massinha de Modelar',
    difficulty: 'facil',
    content: {
      instructions: 'Faça bolinhas e cobrinhas com massinha:',
      shapes: ['Bolinhas', 'Cobrinhas']
    }
  },
  {
    id: 'ar-mat-010',
    type: 'colorir',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Casa Colorida',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe e pinte uma casa bem colorida:',
      parts: ['Telhado', 'Paredes', 'Porta', 'Janelas']
    }
  }
];

// 10 Atividades de Educação Física para Maternal
export const educacaoFisicaMaternal: Activity[] = [
  {
    id: 'ef-mat-001',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Andar e Correr',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe você andando e correndo:',
      actions: ['Andando', 'Correndo']
    }
  },
  {
    id: 'ef-mat-002',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Pular com os Dois Pés',
    difficulty: 'facil',
    content: {
      instructions: 'Faça 5 pulos e peça para alguém desenhar bolinhas para cada pulo:',
      count: ['1', '2', '3', '4', '5']
    }
  },
  {
    id: 'ef-mat-003',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Jogar e Pegar Bola',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe uma bola e circule: você consegue jogá-la para cima e pegar?',
      options: ['SIM 😊', 'NÃO ☹️']
    }
  },
  {
    id: 'ef-mat-004',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Equilíbrio',
    difficulty: 'facil',
    content: {
      instructions: 'Fique em um pé só. Por quantos segundos você consegue?',
      time: ['1-5 segundos', '5-10 segundos', 'Mais de 10']
    }
  },
  {
    id: 'ef-mat-005',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Movimentos do Corpo',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue o movimento à parte do corpo:',
      pairs: [
        { movement: 'Bater palmas', part: '🖐️ Mãos' },
        { movement: 'Caminhar', part: '🦵 Pés' },
        { movement: 'Acenar', part: '🖐️ Braço' }
      ]
    }
  },
  {
    id: 'ef-mat-006',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Dança',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe você dançando sua música favorita:',
      activity: 'Desenho de dança'
    }
  },
  {
    id: 'ef-mat-007',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Circuito Motor',
    difficulty: 'facil',
    content: {
      instructions: 'Marque com X as atividades que você consegue fazer:',
      activities: [
        '⬜ Pular corda',
        '⬜ Chutar bola',
        '⬜ Correr',
        '⬜ Rastejar'
      ]
    }
  },
  {
    id: 'ef-mat-008',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Alongamento',
    difficulty: 'facil',
    content: {
      instructions: 'Circule as partes do corpo que você alongou hoje:',
      parts: ['Braços', 'Pernas', 'Pescoço', 'Costas']
    }
  },
  {
    id: 'ef-mat-009',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Brincadeiras ao Ar Livre',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe sua brincadeira favorita no parque:',
      options: ['Balanço', 'Escorregador', 'Gangorra', 'Casinha']
    }
  },
  {
    id: 'ef-mat-010',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Esportes com Bola',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte as bolas de esportes diferentes:',
      balls: ['⚽ Futebol', '🏀 Basquete', '🎾 Tênis']
    }
  }
];

// 10 Atividades de Lógica para Maternal
export const logicaMaternal: Activity[] = [
  {
    id: 'lo-mat-001',
    type: 'sequencias',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Padrão Simples',
    difficulty: 'facil',
    content: {
      instructions: 'Continue o padrão:',
      sequences: [
        { pattern: ['🔴', '🔵', '🔴', '🔵', '?'], answer: '🔴' }
      ]
    }
  },
  {
    id: 'lo-mat-002',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Igual e Diferente',
    difficulty: 'facil',
    content: {
      instructions: 'Circule o que é diferente:',
      items: ['🍎', '🍎', '🍌', '🍎']
    }
  },
  {
    id: 'lo-mat-003',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Maior e Menor',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte o maior:',
      items: ['🐘 Grande', '🐭 Pequeno']
    }
  },
  {
    id: 'lo-mat-004',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'O Que Vem Primeiro?',
    difficulty: 'facil',
    content: {
      instructions: 'Numere a ordem: 1, 2, 3',
      sequence: ['🥚 Ovo', '🐣 Pintinho', '🐔 Galinha']
    }
  },
  {
    id: 'lo-mat-005',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Agrupar Iguais',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue os objetos iguais:',
      pairs: [
        { item1: '🍎', item2: '🍎' },
        { item1: '⭐', item2: '⭐' },
        { item1: '🚗', item2: '🚗' }
      ]
    }
  },
  {
    id: 'lo-mat-006',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'O Que Falta?',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe o que está faltando:',
      items: ['👁️ Olho', '?', '👁️ Olho']
    }
  },
  {
    id: 'lo-mat-007',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Cores e Formas',
    difficulty: 'facil',
    content: {
      instructions: 'Pinte todos os círculos de vermelho:',
      shapes: ['⭕', '⬛', '⭕', '🔺']
    }
  },
  {
    id: 'lo-mat-008',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Encaixar Peças',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue cada forma ao seu espaço:',
      pairs: [
        { shape: '⭕ Círculo', space: '⭕ Buraco círculo' },
        { shape: '⬛ Quadrado', space: '⬛ Buraco quadrado' }
      ]
    }
  },
  {
    id: 'lo-mat-009',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Completar Desenho',
    difficulty: 'facil',
    content: {
      instructions: 'Complete o desenho da casa que está pela metade:',
      activity: 'Completar metade do desenho'
    }
  },
  {
    id: 'lo-mat-010',
    type: 'sequencias',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Sequência de Tamanhos',
    difficulty: 'facil',
    content: {
      instructions: 'Ordene do menor para o maior:',
      items: ['Pequeno', 'Médio', 'Grande']
    }
  }
];

// 10 Atividades de Memória para Maternal
export const memoriaMaternal: Activity[] = [
  {
    id: 'me-mat-001',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Jogo da Memória - Frutas',
    difficulty: 'facil',
    content: {
      instructions: 'Encontre os pares de frutas iguais:',
      pairs: [
        { item: '🍎', pair: '🍎' },
        { item: '🍌', pair: '🍌' },
        { item: '🍊', pair: '🍊' }
      ]
    }
  },
  {
    id: 'me-mat-002',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'O Que Tinha?',
    difficulty: 'facil',
    content: {
      instructions: 'Olhe bem: 🍎 🚗 ⭐. Agora cubra e desenhe o que lembra:',
      items: ['Item 1:', 'Item 2:', 'Item 3:']
    }
  },
  {
    id: 'me-mat-003',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Repetir Sons',
    difficulty: 'facil',
    content: {
      instructions: 'Peça para alguém bater palmas: 👏👏. Repita!',
      sequence: 'Sequência de 2 palmas'
    }
  },
  {
    id: 'me-mat-004',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Cores da Sequência',
    difficulty: 'facil',
    content: {
      instructions: 'Olhe as cores: 🔴 🔵. Cubra e pinte na ordem:',
      spaces: ['□', '□']
    }
  },
  {
    id: 'me-mat-005',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Onde Está?',
    difficulty: 'facil',
    content: {
      instructions: 'Um brinquedo está escondido. Você lembra onde colocou?',
      options: ['⬜ Debaixo da mesa', '⬜ Na caixa', '⬜ No armário']
    }
  },
  {
    id: 'me-mat-006',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Números em Ordem',
    difficulty: 'facil',
    content: {
      instructions: 'Olhe: 1, 2, 3. Cubra e escreva:',
      spaces: ['_', '_', '_']
    }
  },
  {
    id: 'me-mat-007',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Animais que Vi',
    difficulty: 'facil',
    content: {
      instructions: 'Observe: 🐶 🐱 🐰. Cubra. Quantos animais eram?',
      options: ['1', '2', '3', '4']
    }
  },
  {
    id: 'me-mat-008',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'História em Sequência',
    difficulty: 'facil',
    content: {
      instructions: 'Veja a ordem: 1️⃣ Acordar 2️⃣ Comer 3️⃣ Brincar. Repita!',
      sequence: ['1', '2', '3']
    }
  },
  {
    id: 'me-mat-009',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Qual Sumiu?',
    difficulty: 'facil',
    content: {
      instructions: 'Tinha 3 objetos: 🍎 ⭐ 🚗. Agora tem 2: 🍎 🚗. Qual sumiu?',
      answer: '⭐'
    }
  },
  {
    id: 'me-mat-010',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Minha Rotina',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe 3 coisas que você faz todos os dias:',
      spaces: ['Manhã:', 'Tarde:', 'Noite:']
    }
  }
];

// Exportar todas as atividades do maternal
export const allMaternalActivities: Activity[] = [
  ...portuguesMaternal,
  ...matematicaMaternal,
  ...cienciasMaternal,
  ...historiaMaternal,
  ...geografiaMaternal,
  ...inglesMaternal,
  ...artesMaternal,
  ...educacaoFisicaMaternal,
  ...logicaMaternal,
  ...memoriaMaternal
];
