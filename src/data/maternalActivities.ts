import { Activity } from './activities';
import maternalVogaisTrenzinho from '@/assets/maternal-vogais-trenzinho.png';
import maternalContorneA from '@/assets/maternal-contorne-a.png';
import maternalContorneE from '@/assets/maternal-contorne-e.png';
import maternalContorneI from '@/assets/maternal-contorne-i.png';
import maternalContorneO from '@/assets/maternal-contorne-o.png';
import maternalContorneU from '@/assets/maternal-contorne-u.png';
import maternalVogaisLigar1 from '@/assets/maternal-vogais-ligar-1.png';
import maternalVogaisLigar2 from '@/assets/maternal-vogais-ligar-2.png';
import maternalLetraInicialNome from '@/assets/maternal-letra-inicial-nome.png';
import maternalFormePalavras from '@/assets/maternal-forme-palavras.png';

// 10 Folhas A4 de Português para Maternal - Com imagens completas
export const portuguesMaternal: Activity[] = [
  {
    id: 'pt-mat-folha-001',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Vogais - Recorte e Cole no Trenzinho',
    difficulty: 'facil',
    content: {
      imageUrl: maternalVogaisTrenzinho,
    }
  },
  {
    id: 'pt-mat-folha-002',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Contorne a Letra A',
    difficulty: 'facil',
    content: {
      imageUrl: maternalContorneA,
    }
  },
  {
    id: 'pt-mat-folha-003',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Contorne a Letra E',
    difficulty: 'facil',
    content: {
      imageUrl: maternalContorneE,
    }
  },
  {
    id: 'pt-mat-folha-004',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Contorne a Letra I',
    difficulty: 'facil',
    content: {
      imageUrl: maternalContorneI,
    }
  },
  {
    id: 'pt-mat-folha-005',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Contorne a Letra O',
    difficulty: 'facil',
    content: {
      imageUrl: maternalContorneO,
    }
  },
  {
    id: 'pt-mat-folha-006',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Contorne a Letra U',
    difficulty: 'facil',
    content: {
      imageUrl: maternalContorneU,
    }
  },
  {
    id: 'pt-mat-folha-007',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Vogais - Ligue os Desenhos',
    difficulty: 'facil',
    content: {
      imageUrl: maternalVogaisLigar1,
    }
  },
  {
    id: 'pt-mat-folha-008',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Vogais - Ligue os Desenhos 2',
    difficulty: 'facil',
    content: {
      imageUrl: maternalVogaisLigar2,
    }
  },
  {
    id: 'pt-mat-folha-009',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Encontre a Letra Inicial do Seu Nome',
    difficulty: 'facil',
    content: {
      imageUrl: maternalLetraInicialNome,
    }
  },
  {
    id: 'pt-mat-folha-010',
    type: 'exercicios',
    subject: 'portugues',
    grade: ['maternal'],
    title: 'Forme as Palavras',
    difficulty: 'facil',
    content: {
      imageUrl: maternalFormePalavras,
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
    title: 'Número 1',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o número 1 cinco vezes:',
      words: [
        { word: '___ ___ ___ ___ ___' }
      ]
    }
  },
  {
    id: 'mat-mat-002',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Número 2',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o número 2 cinco vezes:',
      words: [
        { word: '___ ___ ___ ___ ___' }
      ]
    }
  },
  {
    id: 'mat-mat-003',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Número 3',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o número 3 cinco vezes:',
      words: [
        { word: '___ ___ ___ ___ ___' }
      ]
    }
  },
  {
    id: 'mat-mat-004',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Contar de 1 a 5',
    difficulty: 'facil',
    content: {
      instructions: 'Complete a sequência numérica:',
      words: [
        { word: '1 - 2 - ___ - 4 - ___' },
        { word: '1 - ___ - 3 - ___ - 5' }
      ]
    }
  },
  {
    id: 'mat-mat-005',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Maior ou Menor',
    difficulty: 'facil',
    content: {
      instructions: 'Circule o MAIOR número em cada linha:',
      words: [
        { word: '1    3' },
        { word: '2    5' },
        { word: '4    1' },
        { word: '3    2' }
      ]
    }
  },
  {
    id: 'mat-mat-006',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Somas Simples',
    difficulty: 'facil',
    content: {
      instructions: 'Resolva as continhas:',
      problems: [
        { problem: '1 + 1 = ___' },
        { problem: '2 + 1 = ___' },
        { problem: '1 + 2 = ___' },
        { problem: '2 + 2 = ___' }
      ]
    }
  },
  {
    id: 'mat-mat-007',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Antes e Depois',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o número que vem ANTES e DEPOIS:',
      words: [
        { word: '___ 2 ___' },
        { word: '___ 3 ___' },
        { word: '___ 4 ___' },
        { word: '___ 5 ___' }
      ]
    }
  },
  {
    id: 'mat-mat-008',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Quantos Faltam?',
    difficulty: 'facil',
    content: {
      instructions: 'Complete para chegar ao número:',
      words: [
        { word: '2 + ___ = 3' },
        { word: '1 + ___ = 4' },
        { word: '3 + ___ = 5' },
        { word: '2 + ___ = 4' }
      ]
    }
  },
  {
    id: 'mat-mat-009',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Subtrações Simples',
    difficulty: 'facil',
    content: {
      instructions: 'Resolva as continhas:',
      problems: [
        { problem: '2 - 1 = ___' },
        { problem: '3 - 1 = ___' },
        { problem: '4 - 2 = ___' },
        { problem: '5 - 1 = ___' }
      ]
    }
  },
  {
    id: 'mat-mat-010',
    type: 'exercicios',
    subject: 'matematica',
    grade: ['maternal'],
    title: 'Ordem Crescente',
    difficulty: 'facil',
    content: {
      instructions: 'Coloque os números em ordem do menor para o maior:',
      words: [
        { word: '3 - 1 - 2    Ordem: ___ ___ ___' },
        { word: '5 - 2 - 4    Ordem: ___ ___ ___' }
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
      instructions: 'Escreva o nome de 5 partes do corpo:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' },
        { word: '4. _______________' },
        { word: '5. _______________' }
      ]
    }
  },
  {
    id: 'ci-mat-002',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Cinco Sentidos',
    difficulty: 'facil',
    content: {
      instructions: 'Complete com o sentido correto:',
      words: [
        { word: 'Os olhos servem para _______________' },
        { word: 'As orelhas servem para _______________' },
        { word: 'O nariz serve para _______________' }
      ]
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
      instructions: 'Escreva o nome de 3 animais que vivem em casa:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
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
      instructions: 'Escreva V (verdadeiro) ou F (falso):',
      words: [
        { word: 'A vaca vive na fazenda ___' },
        { word: 'O leão vive na fazenda ___' },
        { word: 'A galinha vive na fazenda ___' },
        { word: 'O tubarão vive na fazenda ___' }
      ]
    }
  },
  {
    id: 'ci-mat-005',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Partes das Plantas',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 3 partes de uma planta:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
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
      instructions: 'Complete as frases:',
      words: [
        { word: 'De dia vemos o _______________ (SOL/LUA)' },
        { word: 'De noite vemos a _______________ (SOL/LUA)' },
        { word: 'Dormimos à _______________ (NOITE/MANHÃ)' }
      ]
    }
  },
  {
    id: 'ci-mat-007',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'O Tempo',
    difficulty: 'facil',
    content: {
      instructions: 'Ligue corretamente:',
      words: [
        { word: 'Quando chove usamos _______________' },
        { word: 'Quando está sol usamos _______________' },
        { word: 'Quando está frio usamos _______________' }
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
      instructions: 'Escreva o nome de 4 frutas que você conhece:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' },
        { word: '4. _______________' }
      ]
    }
  },
  {
    id: 'ci-mat-009',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'A Água',
    difficulty: 'facil',
    content: {
      instructions: 'Complete com SIM ou NÃO:',
      words: [
        { word: 'A água é importante? ___' },
        { word: 'Podemos viver sem água? ___' },
        { word: 'Devemos economizar água? ___' },
        { word: 'A água suja é boa para beber? ___' }
      ]
    }
  },
  {
    id: 'ci-mat-010',
    type: 'exercicios',
    subject: 'ciencias',
    grade: ['maternal'],
    title: 'Higiene Pessoal',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva 3 hábitos de higiene:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
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
      instructions: 'Escreva o nome de 3 pessoas da sua família:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
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
      instructions: 'Escreva 3 cômodos da sua casa:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'hi-mat-003',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Hoje e Ontem',
    difficulty: 'facil',
    content: {
      instructions: 'Complete as frases:',
      words: [
        { word: 'Hoje é dia _______________' },
        { word: 'Ontem foi dia _______________' },
        { word: 'Amanhã será dia _______________' }
      ]
    }
  },
  {
    id: 'hi-mat-004',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Quando Eu Era Bebê',
    difficulty: 'facil',
    content: {
      instructions: 'Complete com SIM ou NÃO:',
      words: [
        { word: 'Quando eu era bebê, eu andava? ___' },
        { word: 'Quando eu era bebê, eu falava? ___' },
        { word: 'Agora eu sei andar? ___' },
        { word: 'Agora eu sei falar? ___' }
      ]
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
      instructions: 'Escreva o nome de 3 profissões:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
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
      instructions: 'Complete os dias da semana:',
      words: [
        { word: 'Domingo - _______________ - Terça' },
        { word: 'Quarta - _______________ - Sexta' },
        { word: 'Sábado - _______________' }
      ]
    }
  },
  {
    id: 'hi-mat-007',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Meios de Transporte',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva 4 meios de transporte:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' },
        { word: '4. _______________' }
      ]
    }
  },
  {
    id: 'hi-mat-008',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Festas',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 3 festas que você conhece:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
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
      instructions: 'Responda:',
      words: [
        { word: 'Qual o nome da sua escola? _______________' },
        { word: 'Qual o nome da sua professora? _______________' }
      ]
    }
  },
  {
    id: 'hi-mat-010',
    type: 'exercicios',
    subject: 'historia',
    grade: ['maternal'],
    title: 'Brinquedos',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 3 brinquedos que você gosta:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
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
      instructions: 'Complete com DENTRO ou FORA:',
      words: [
        { word: 'O livro está _______________ da mochila' },
        { word: 'O pássaro está _______________ do ninho' },
        { word: 'A roupa está _______________ do armário' }
      ]
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
      instructions: 'Complete com EM CIMA ou EMBAIXO:',
      words: [
        { word: 'O teto fica _______________ da casa' },
        { word: 'O chão fica _______________ da casa' },
        { word: 'O avião voa _______________ das nuvens' }
      ]
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
      instructions: 'Escreva PERTO ou LONGE:',
      words: [
        { word: 'Minha casa fica _______________ da escola' },
        { word: 'A praia fica _______________ da minha casa' },
        { word: 'Meu amigo senta _______________ de mim' }
      ]
    }
  },
  {
    id: 'ge-mat-004',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Lugares',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 3 lugares da sua cidade:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'ge-mat-005',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Cidade e Campo',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva C (cidade) ou F (campo):',
      words: [
        { word: 'Plantação ___' },
        { word: 'Prédios ___' },
        { word: 'Vacas ___' },
        { word: 'Carros ___' }
      ]
    }
  },
  {
    id: 'ge-mat-006',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Elementos da Natureza',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 4 elementos da natureza:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' },
        { word: '4. _______________' }
      ]
    }
  },
  {
    id: 'ge-mat-007',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Onde Tem Água?',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva SIM ou NÃO:',
      words: [
        { word: 'Tem água no rio? ___' },
        { word: 'Tem água na árvore? ___' },
        { word: 'Tem água no mar? ___' },
        { word: 'Tem água na pedra? ___' }
      ]
    }
  },
  {
    id: 'ge-mat-008',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Minha Rua',
    difficulty: 'facil',
    content: {
      instructions: 'Responda:',
      words: [
        { word: 'Qual o nome da sua rua? _______________' },
        { word: 'Tem árvores na sua rua? _______________' }
      ]
    }
  },
  {
    id: 'ge-mat-009',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Direções',
    difficulty: 'facil',
    content: {
      instructions: 'Complete:',
      words: [
        { word: 'Para ir para frente, vou para _______________ (FRENTE/TRÁS)' },
        { word: 'Para voltar, vou para _______________ (FRENTE/TRÁS)' }
      ]
    }
  },
  {
    id: 'ge-mat-010',
    type: 'exercicios',
    subject: 'geografia',
    grade: ['maternal'],
    title: 'Meu Endereço',
    difficulty: 'facil',
    content: {
      instructions: 'Com ajuda, escreva seu endereço:',
      words: [
        { word: 'Rua: _______________' },
        { word: 'Número: _______________' },
        { word: 'Cidade: _______________' }
      ]
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
    title: 'Colors - RED',
    difficulty: 'facil',
    content: {
      instructions: 'Copie a palavra RED três vezes:',
      words: [
        { word: 'R E D  _______________' },
        { word: 'R E D  _______________' },
        { word: 'R E D  _______________' }
      ]
    }
  },
  {
    id: 'in-mat-002',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Colors - BLUE',
    difficulty: 'facil',
    content: {
      instructions: 'Copie a palavra BLUE três vezes:',
      words: [
        { word: 'B L U E  _______________' },
        { word: 'B L U E  _______________' },
        { word: 'B L U E  _______________' }
      ]
    }
  },
  {
    id: 'in-mat-003',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Colors - YELLOW',
    difficulty: 'facil',
    content: {
      instructions: 'Copie a palavra YELLOW três vezes:',
      words: [
        { word: 'Y E L L O W  _______________' },
        { word: 'Y E L L O W  _______________' },
        { word: 'Y E L L O W  _______________' }
      ]
    }
  },
  {
    id: 'in-mat-004',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Numbers - ONE',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva a palavra ONE cinco vezes:',
      words: [
        { word: '___  ___  ___  ___  ___' }
      ]
    }
  },
  {
    id: 'in-mat-005',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Numbers - TWO',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva a palavra TWO cinco vezes:',
      words: [
        { word: '___  ___  ___  ___  ___' }
      ]
    }
  },
  {
    id: 'in-mat-006',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Animals - DOG',
    difficulty: 'facil',
    content: {
      instructions: 'Complete as letras da palavra DOG:',
      words: [
        { word: 'D ___  G' },
        { word: '___ O G' },
        { word: 'D O ___' }
      ]
    }
  },
  {
    id: 'in-mat-007',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Animals - CAT',
    difficulty: 'facil',
    content: {
      instructions: 'Complete as letras da palavra CAT:',
      words: [
        { word: 'C ___  T' },
        { word: '___ A T' },
        { word: 'C A ___' }
      ]
    }
  },
  {
    id: 'in-mat-008',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Greetings - HELLO',
    difficulty: 'facil',
    content: {
      instructions: 'Copie a palavra HELLO:',
      words: [
        { word: 'H E L L O  _______________' },
        { word: 'H E L L O  _______________' }
      ]
    }
  },
  {
    id: 'in-mat-009',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Greetings - GOODBYE',
    difficulty: 'facil',
    content: {
      instructions: 'Copie a palavra GOODBYE:',
      words: [
        { word: 'G O O D B Y E  _______________' }
      ]
    }
  },
  {
    id: 'in-mat-010',
    type: 'exercicios',
    subject: 'ingles',
    grade: ['maternal'],
    title: 'Family - MOM and DAD',
    difficulty: 'facil',
    content: {
      instructions: 'Copie as palavras:',
      words: [
        { word: 'M O M  _______________' },
        { word: 'D A D  _______________' }
      ]
    }
  }
];

// 10 Atividades de Artes para Maternal
export const artesMaternal: Activity[] = [
  {
    id: 'ar-mat-001',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Cores Primárias',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome das 3 cores primárias:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-002',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Círculo',
    difficulty: 'facil',
    content: {
      instructions: 'Trace 3 círculos grandes no espaço abaixo:',
      words: [
        { word: 'Círculo 1: _______________' },
        { word: 'Círculo 2: _______________' },
        { word: 'Círculo 3: _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-003',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Formas Geométricas',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 3 formas geométricas:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-004',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Linha Reta e Curva',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe 3 linhas retas e 3 linhas curvas',
      words: [
        { word: 'Linhas retas: _______________' },
        { word: 'Linhas curvas: _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-005',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Meu Desenho Favorito',
    difficulty: 'facil',
    content: {
      instructions: 'O que você mais gosta de desenhar? Escreva:',
      words: [
        { word: 'Eu gosto de desenhar: _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-006',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Materiais de Arte',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 3 materiais usados para desenhar:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-007',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Grande e Pequeno',
    difficulty: 'facil',
    content: {
      instructions: 'Desenhe um círculo GRANDE e um círculo PEQUENO',
      words: [
        { word: 'Círculo GRANDE: _______________' },
        { word: 'Círculo PEQUENO: _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-008',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Quadrado',
    difficulty: 'facil',
    content: {
      instructions: 'Trace 3 quadrados no espaço abaixo:',
      words: [
        { word: 'Quadrado 1: _______________' },
        { word: 'Quadrado 2: _______________' },
        { word: 'Quadrado 3: _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-009',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Triângulo',
    difficulty: 'facil',
    content: {
      instructions: 'Trace 3 triângulos no espaço abaixo:',
      words: [
        { word: 'Triângulo 1: _______________' },
        { word: 'Triângulo 2: _______________' },
        { word: 'Triângulo 3: _______________' }
      ]
    }
  },
  {
    id: 'ar-mat-010',
    type: 'exercicios',
    subject: 'artes',
    grade: ['maternal'],
    title: 'Minha Cor Favorita',
    difficulty: 'facil',
    content: {
      instructions: 'Responda:',
      words: [
        { word: 'Minha cor favorita é: _______________' },
        { word: 'Por quê? _______________' }
      ]
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
    title: 'Movimentos do Corpo',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva 3 movimentos que você pode fazer com o corpo:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'ef-mat-002',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Pular',
    difficulty: 'facil',
    content: {
      instructions: 'Complete:',
      words: [
        { word: 'Eu consigo pular com _______________ pés (um/dois)' },
        { word: 'Pular é _______________ (fácil/difícil)' }
      ]
    }
  },
  {
    id: 'ef-mat-003',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Esportes',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 2 esportes que você conhece:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' }
      ]
    }
  },
  {
    id: 'ef-mat-004',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Andar e Correr',
    difficulty: 'facil',
    content: {
      instructions: 'Complete com V (verdadeiro) ou F (falso):',
      words: [
        { word: 'Correr é mais rápido que andar ___' },
        { word: 'Andar é mais rápido que correr ___' }
      ]
    }
  },
  {
    id: 'ef-mat-005',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Bola',
    difficulty: 'facil',
    content: {
      instructions: 'O que podemos fazer com uma bola? Escreva 3 ações:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'ef-mat-006',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Equilíbrio',
    difficulty: 'facil',
    content: {
      instructions: 'Complete:',
      words: [
        { word: 'Eu consigo ficar em um pé só? _______________' },
        { word: 'Quantos segundos? _______________' }
      ]
    }
  },
  {
    id: 'ef-mat-007',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Brincadeiras',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva o nome de 3 brincadeiras que você gosta:',
      words: [
        { word: '1. _______________' },
        { word: '2. _______________' },
        { word: '3. _______________' }
      ]
    }
  },
  {
    id: 'ef-mat-008',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Alongar',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva SIM ou NÃO:',
      words: [
        { word: 'É importante alongar antes de brincar? ___' },
        { word: 'Alongar ajuda nosso corpo? ___' }
      ]
    }
  },
  {
    id: 'ef-mat-009',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Rápido e Devagar',
    difficulty: 'facil',
    content: {
      instructions: 'Complete com RÁPIDO ou DEVAGAR:',
      words: [
        { word: 'Um carro é _______________ (rápido/devagar)' },
        { word: 'Uma tartaruga é _______________ (rápida/devagar)' }
      ]
    }
  },
  {
    id: 'ef-mat-010',
    type: 'exercicios',
    subject: 'ed-fisica',
    grade: ['maternal'],
    title: 'Atividade Física',
    difficulty: 'facil',
    content: {
      instructions: 'Responda:',
      words: [
        { word: 'Você gosta de se exercitar? _______________' },
        { word: 'Qual sua atividade favorita? _______________' }
      ]
    }
  }
];

// 10 Atividades de Lógica para Maternal
export const logicaMaternal: Activity[] = [
  {
    id: 'lo-mat-001',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Sequências',
    difficulty: 'facil',
    content: {
      instructions: 'Complete a sequência: 1, 2, ___',
      words: [
        { word: '1, 2, ___' },
        { word: 'A, B, ___' }
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
      instructions: 'Qual palavra é diferente? Circule:',
      words: [
        { word: 'BOLA - BOLA - CASA - BOLA' },
        { word: 'GATO - RATO - GATO - GATO' }
      ]
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
      instructions: 'Circule a palavra MAIOR em cada linha:',
      words: [
        { word: 'ELEFANTE     RATO' },
        { word: 'FORMIGA      CACHORRO' }
      ]
    }
  },
  {
    id: 'lo-mat-004',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Ordem Lógica',
    difficulty: 'facil',
    content: {
      instructions: 'Numere a ordem correta (1, 2, 3):',
      words: [
        { word: '___ Plantar ___ Colher ___ Comer' },
        { word: '___ Acordar ___ Almoçar ___ Dormir' }
      ]
    }
  },
  {
    id: 'lo-mat-005',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Agrupar',
    difficulty: 'facil',
    content: {
      instructions: 'Agrupe os animais. Escreva quantos tem de cada:',
      words: [
        { word: 'GATO GATO CACHORRO GATO' },
        { word: 'Gatos: ___  Cachorros: ___' }
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
      instructions: 'Complete com a letra que falta:',
      words: [
        { word: 'A, B, ___, D' },
        { word: '___, E, F, G' },
        { word: 'M, ___, O, P' }
      ]
    }
  },
  {
    id: 'lo-mat-007',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Classificar',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva F (fruta) ou A (animal):',
      words: [
        { word: 'Maçã ___' },
        { word: 'Gato ___' },
        { word: 'Banana ___' },
        { word: 'Cachorro ___' }
      ]
    }
  },
  {
    id: 'lo-mat-008',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Relações',
    difficulty: 'facil',
    content: {
      instructions: 'Complete:',
      words: [
        { word: 'A mãe da galinha é a _______________' },
        { word: 'O filho do cachorro é o _______________' },
        { word: 'A casa do pássaro é o _______________' }
      ]
    }
  },
  {
    id: 'lo-mat-009',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Antes e Depois',
    difficulty: 'facil',
    content: {
      instructions: 'O que vem antes? Complete:',
      words: [
        { word: 'Antes de dormir, eu _______________' },
        { word: 'Antes de comer, eu _______________' }
      ]
    }
  },
  {
    id: 'lo-mat-010',
    type: 'exercicios',
    subject: 'logica',
    grade: ['maternal'],
    title: 'Comparações',
    difficulty: 'facil',
    content: {
      instructions: 'Complete com MAIS ou MENOS:',
      words: [
        { word: '5 é _______________ que 3' },
        { word: '1 é _______________ que 4' },
        { word: '2 é _______________ que 2' }
      ]
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
    title: 'Lembrar Palavras',
    difficulty: 'facil',
    content: {
      instructions: 'Leia estas 3 palavras e depois escreva sem olhar:',
      words: [
        { word: 'SOL - LUA - CÉU' },
        { word: 'Agora escreva: ___ - ___ - ___' }
      ]
    }
  },
  {
    id: 'me-mat-002',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Números de Memória',
    difficulty: 'facil',
    content: {
      instructions: 'Olhe estes números por 10 segundos e depois escreva:',
      words: [
        { word: '1 - 2 - 3' },
        { word: 'Escreva: ___ - ___ - ___' }
      ]
    }
  },
  {
    id: 'me-mat-003',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Cores de Memória',
    difficulty: 'facil',
    content: {
      instructions: 'Memorize estas 3 cores e escreva:',
      words: [
        { word: 'AZUL - VERDE - AMARELO' },
        { word: 'Escreva: ___ - ___ - ___' }
      ]
    }
  },
  {
    id: 'me-mat-004',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Sequência de Letras',
    difficulty: 'facil',
    content: {
      instructions: 'Olhe as letras e depois escreva de memória:',
      words: [
        { word: 'A - B - C' },
        { word: 'Escreva: ___ - ___ - ___' }
      ]
    }
  },
  {
    id: 'me-mat-005',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Lembrar Objetos',
    difficulty: 'facil',
    content: {
      instructions: 'Memorize estes 3 objetos e escreva:',
      words: [
        { word: 'BOLA - LIVRO - LÁPIS' },
        { word: 'Escreva: ___ - ___ - ___' }
      ]
    }
  },
  {
    id: 'me-mat-006',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Meu Nome',
    difficulty: 'facil',
    content: {
      instructions: 'Escreva seu nome completo de memória:',
      words: [
        { word: 'Nome: _______________' },
        { word: 'Sobrenome: _______________' }
      ]
    }
  },
  {
    id: 'me-mat-007',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Animais de Memória',
    difficulty: 'facil',
    content: {
      instructions: 'Olhe estes animais e depois escreva:',
      words: [
        { word: 'GATO - CACHORRO - PÁSSARO' },
        { word: 'Escreva: ___ - ___ - ___' }
      ]
    }
  },
  {
    id: 'me-mat-008',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Ordem de Palavras',
    difficulty: 'facil',
    content: {
      instructions: 'Memorize a ordem e escreva:',
      words: [
        { word: '1º PAI  2º MÃE  3º FILHO' },
        { word: '1º ___  2º ___  3º ___' }
      ]
    }
  },
  {
    id: 'me-mat-009',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Números do Telefone',
    difficulty: 'facil',
    content: {
      instructions: 'Memorize este número de telefone simples:',
      words: [
        { word: '1 - 2 - 3 - 4' },
        { word: 'Escreva: ___ - ___ - ___ - ___' }
      ]
    }
  },
  {
    id: 'me-mat-010',
    type: 'exercicios',
    subject: 'memoria',
    grade: ['maternal'],
    title: 'Minha Idade',
    difficulty: 'facil',
    content: {
      instructions: 'Responda de memória:',
      words: [
        { word: 'Quantos anos você tem? _______________' },
        { word: 'Em que ano você nasceu? _______________' }
      ]
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
