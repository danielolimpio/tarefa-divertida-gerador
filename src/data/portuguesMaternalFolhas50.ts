import { Activity } from './activities';

// 50 folhas A4 de Português para o Maternal (2-3 anos)
// Exercícios tradicionais com cabeçalho Nome/Data/Turma, instrução clara,
// e elementos visuais renderizados no PDF (ver renderFolhaMaternal em pdfGenerator).

type Folha = {
  numero: number;
  tema: string;
  instrucao: string;
  elementos: string[];
  acao:
    | 'circular'
    | 'ligar'
    | 'marcar'
    | 'pintar'
    | 'tracar'
    | 'contornar'
    | 'desenhar'
    | 'pintar_circular';
};

const folhas: Folha[] = [
  { numero: 1,  tema: 'Vogal A',  instrucao: 'Pinte apenas os desenhos que começam com a letra A.', elementos: ['Abelha', 'Aviao', 'Bola', 'Casa'], acao: 'circular' },
  { numero: 2,  tema: 'Vogal E',  instrucao: 'Ligue a letra E maiúscula ao desenho que começa com E.', elementos: ['Elefante', 'Estrela', 'Gato'], acao: 'ligar' },
  { numero: 3,  tema: 'Vogal I',  instrucao: 'Marque com um X o desenho que começa com a letra I.', elementos: ['Igreja', 'Ilha', 'Uva'], acao: 'marcar' },
  { numero: 4,  tema: 'Vogal O',  instrucao: 'Pinte o desenho que começa com a letra O.', elementos: ['Ovo', 'Ovelha', 'Dado'], acao: 'pintar' },
  { numero: 5,  tema: 'Vogal U',  instrucao: 'Circule os desenhos que começam com a letra U.', elementos: ['Uva', 'Unicornio', 'Maca'], acao: 'circular' },
  { numero: 6,  tema: 'Letra B',  instrucao: 'Ligue a letra B ao seu desenho correspondente.', elementos: ['Bola', 'Banana', 'Carro'], acao: 'ligar' },
  { numero: 7,  tema: 'Letra C',  instrucao: 'Pinte apenas os desenhos que começam com C.', elementos: ['Casa', 'Cachorro', 'Sol'], acao: 'pintar' },
  { numero: 8,  tema: 'Letra D',  instrucao: 'Circule o desenho que começa com a letra D.', elementos: ['Dado', 'Dedo', 'Flor'], acao: 'circular' },
  { numero: 9,  tema: 'Letra F',  instrucao: 'Ligue a letra F ao animal correspondente.', elementos: ['Foca', 'Formiga', 'Pato'], acao: 'ligar' },
  { numero: 10, tema: 'Letra M',  instrucao: 'Marque com X os desenhos que começam com M.', elementos: ['Macaco', 'Maca', 'Lua'], acao: 'marcar' },
  { numero: 11, tema: 'Discriminação Visual', instrucao: 'Circule o desenho que é IGUAL ao modelo no topo.', elementos: ['Modelo: Estrela', 'Opcao 1: Estrela', 'Opcao 2: Coracao', 'Opcao 3: Quadrado'], acao: 'circular' },
  { numero: 12, tema: 'Sombras', instrucao: 'Ligue cada objeto à sua sombra correta.', elementos: ['Chave', 'Carro', 'Arvore'], acao: 'ligar' },
  { numero: 13, tema: 'Intruso', instrucao: 'Circule o desenho que NÃO pertence ao grupo (frutas).', elementos: ['Banana', 'Maca', 'Uva', 'Carro'], acao: 'circular' },
  { numero: 14, tema: 'Associação', instrucao: 'Ligue o animal ao seu alimento.', elementos: ['Macaco-Banana', 'Cachorro-Osso', 'Gato-Peixe'], acao: 'ligar' },
  { numero: 15, tema: 'Vogal A (Reforço)', instrucao: 'Pinte apenas os desenhos que começam com A.', elementos: ['Anel', 'Abacaxi', 'Bola'], acao: 'pintar' },
  { numero: 16, tema: 'Pares', instrucao: 'Ligue os desenhos que formam um par igual.', elementos: ['Meia', 'Meia', 'Sapato', 'Sapato', 'Chapeu'], acao: 'ligar' },
  { numero: 17, tema: 'Conceitos Espaciais', instrucao: 'Circule o objeto que está DENTRO da caixa.', elementos: ['Caixa com bola', 'Caixa vazia', 'Bola fora da caixa'], acao: 'circular' },
  { numero: 18, tema: 'Associação Lúdica', instrucao: 'Ligue a criança ao brinquedo que ela está usando.', elementos: ['Menino-Bola', 'Menina-Boneca', 'Crianca-Carrinho'], acao: 'ligar' },
  { numero: 19, tema: 'Tamanhos', instrucao: 'Pinte o desenho GRANDE e circule o desenho PEQUENO.', elementos: ['Elefante grande', 'Elefante pequeno'], acao: 'pintar_circular' },
  { numero: 20, tema: 'Ambientes', instrucao: 'Ligue o animal ao seu lugar correto.', elementos: ['Peixe-Aquario', 'Passaro-Ninho', 'Cachorro-Casinha'], acao: 'ligar' },
  { numero: 21, tema: 'Pré-escrita Reta', instrucao: 'Trace a linha reta do ponto até a letra A.', elementos: ['Ponto inicial', 'Letra A'], acao: 'tracar' },
  { numero: 22, tema: 'Pré-escrita Curva', instrucao: 'Trace a linha curva até a letra O.', elementos: ['Ponto inicial', 'Letra O'], acao: 'tracar' },
  { numero: 23, tema: 'Ligar Pontos', instrucao: 'Ligue os pontos de 1 a 5 para descobrir a letra.', elementos: ['Pontos 1,2,3,4,5 formando um V'], acao: 'ligar' },
  { numero: 24, tema: 'Labirinto Simples', instrucao: 'Ajude o cachorro a chegar à sua casinha pintando o caminho.', elementos: ['Cachorro', 'Caminho reto simples', 'Casinha'], acao: 'pintar' },
  { numero: 25, tema: 'Nome Próprio', instrucao: 'Contorne a primeira letra do seu nome.', elementos: ['Letra A (exemplo) vazada'], acao: 'contornar' },
  { numero: 26, tema: 'Maiúscula e Minúscula', instrucao: 'Ligue a letra maiúscula à sua minúscula.', elementos: ['A-a', 'B-b', 'C-c'], acao: 'ligar' },
  { numero: 27, tema: 'Cobrir Pontilhados', instrucao: 'Cubra os pontilhados para formar a letra E.', elementos: ['Letra E pontilhada'], acao: 'tracar' },
  { numero: 28, tema: 'Leitura de Imagem', instrucao: 'Ligue o desenho à palavra escrita em caixa alta.', elementos: ['Sol-SOL', 'Lua-LUA'], acao: 'ligar' },
  { numero: 29, tema: 'Inicial da Palavra', instrucao: 'Circule a primeira letra da palavra mostrada.', elementos: ['Palavra: GATO', 'Opcoes: G, P, M'], acao: 'circular' },
  { numero: 30, tema: 'Coordenação', instrucao: 'Trace linhas verticais para fazer a chuva cair no vaso.', elementos: ['Nuvem', 'Vaso', 'Linhas guia pontilhadas'], acao: 'tracar' },
  { numero: 31, tema: 'Corpo Humano', instrucao: 'Ligue o nome à parte do corpo (mediador lê).', elementos: ['Olho-OLHO', 'Boca-BOCA', 'Nariz-NARIZ'], acao: 'ligar' },
  { numero: 32, tema: 'Vestuário', instrucao: 'Ligue a roupa à parte do corpo onde ela é usada.', elementos: ['Chapeu-Cabeca', 'Sapato-Pe', 'Luva-Mao'], acao: 'ligar' },
  { numero: 33, tema: 'Alimentação', instrucao: 'Pinte apenas os alimentos saudáveis.', elementos: ['Maca', 'Cenoura', 'Bala', 'Refrigerante'], acao: 'pintar' },
  { numero: 34, tema: 'Transporte', instrucao: 'Ligue o veículo ao seu local de circulação.', elementos: ['Barco-Agua', 'Carro-Estrada', 'Aviao-Ceu'], acao: 'ligar' },
  { numero: 35, tema: 'Animais da Fazenda', instrucao: 'Circule os animais que vivem na fazenda.', elementos: ['Vaca', 'Galinha', 'Leao', 'Porco'], acao: 'circular' },
  { numero: 36, tema: 'Cores', instrucao: 'Pinte o desenho da cor solicitada pelo mediador (VERMELHO).', elementos: ['Bola'], acao: 'pintar' },
  { numero: 37, tema: 'Formas Geométricas', instrucao: 'Ligue a forma geométrica ao objeto que tem o mesmo formato.', elementos: ['Circulo-Sol', 'Quadrado-Janela', 'Triangulo-Telhado'], acao: 'ligar' },
  { numero: 38, tema: 'Profissões', instrucao: 'Ligue o profissional à sua ferramenta de trabalho.', elementos: ['Medico-Estetoscopio', 'Pintor-Pincel', 'Cozinheiro-Panela'], acao: 'ligar' },
  { numero: 39, tema: 'Família', instrucao: 'Ligue os nomes aos desenhos correspondentes.', elementos: ['Mamae-MAMAE', 'Papai-PAPAI', 'Bebe-BEBE'], acao: 'ligar' },
  { numero: 40, tema: 'Dia e Noite', instrucao: 'Circule apenas os desenhos que vemos no CÉU durante o DIA.', elementos: ['Sol', 'Nuvem', 'Lua', 'Estrela'], acao: 'circular' },
  { numero: 41, tema: 'Atenção Visual', instrucao: 'Circule as 3 diferenças simples entre os dois desenhos.', elementos: ['Desenho A', 'Desenho B'], acao: 'circular' },
  { numero: 42, tema: 'Simetria', instrucao: 'Complete a outra metade da borboleta desenhando ou pintando.', elementos: ['Metade de uma borboleta', 'Grade pontilhada'], acao: 'desenhar' },
  { numero: 43, tema: 'Sequência Lógica', instrucao: 'Circule o desenho que completa a sequência: Sol, Lua, Sol, ___', elementos: ['Sol', 'Lua', 'Nuvem'], acao: 'circular' },
  { numero: 44, tema: 'Onomatopeias', instrucao: 'Ligue o animal ao som que ele faz.', elementos: ['Gato-Miau', 'Cachorro-AuAu', 'Vaca-Muu'], acao: 'ligar' },
  { numero: 45, tema: 'Caça-Palavras Visual', instrucao: 'Encontre e circule os 3 desenhos escondidos: Bola, Pato, Sol.', elementos: ['Bola', 'Pato', 'Sol', 'Casa', 'Flor', 'Lua'], acao: 'circular' },
  { numero: 46, tema: 'Quantidade e Linguagem', instrucao: 'Ligue o número 1 ao desenho que está SOZINHO.', elementos: ['Um pato', 'Dois patos', 'Tres patos'], acao: 'ligar' },
  { numero: 47, tema: 'Rimas Simples', instrucao: 'Circule o desenho que rima com PÃO (MÃO).', elementos: ['Pao', 'Mao', 'Pe'], acao: 'circular' },
  { numero: 48, tema: 'Filhotes', instrucao: 'Ligue o animal adulto ao seu filhote.', elementos: ['Galo-Pinto', 'Vaca-Bezerro', 'Cachorro-Filhote'], acao: 'ligar' },
  { numero: 49, tema: 'Letra Inicial do Nome', instrucao: 'Marque com X o desenho que começa com a mesma letra do seu nome.', elementos: ['Abelha', 'Bola', 'Casa'], acao: 'marcar' },
  { numero: 50, tema: 'Meu Nome Completo', instrucao: 'Trace as letras do seu nome seguindo as setas.', elementos: ['Letras do nome com setas de direcao'], acao: 'tracar' },
];

const difficultyFor = (n: number): Activity['difficulty'] => {
  if (n <= 20) return 'facil';
  if (n <= 40) return 'medio';
  return 'dificil';
};

export const portuguesMaternalFolhas50: Activity[] = folhas.map((f) => ({
  id: `pt-mat-folha50-${String(f.numero).padStart(3, '0')}`,
  type: 'exercicios',
  subject: 'portugues',
  grade: ['maternal'],
  title: `Folha ${f.numero} — ${f.tema}`,
  difficulty: difficultyFor(f.numero),
  content: {
    folhaMaternal: true,
    numero: f.numero,
    tema: f.tema,
    instructions: f.instrucao,
    elementos: f.elementos,
    acao: f.acao,
  },
}));
