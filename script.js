// Definindo um objeto que contém diferentes categorias de produtos: doce, salgado e bebida.
// Cada categoria é representada por um array de objetos, onde cada objeto contém o nome do produto e seu preço.
const produtos = {
  doce: [
    { nome: "bolo", preco: 4 },
    { nome: "brigadeiro", preco: 3 },
    { nome: "beijinho", preco: 2 },
    { nome: "bala", preco: 1 },
  ],
  salgado: [
    { nome: "coxinha", preco: 1 },
    { nome: "kibe", preco: 2 },
    { nome: "risolis", preco: 3 },
    { nome: "bolinho", preco: 4 },
  ],
  bebida: [
    { nome: "refrigerante", preco: 2 },
    { nome: "suco", preco: 1 },
    { nome: "cerveja", preco: 4 },
    { nome: "agua", preco: 3 },
  ],
};

// Inicializando uma variável para armazenar o valor final da soma dos preços.
let final = 0;

// Função para calcular o preço de um produto dado seu tipo e índice.
// 'tipo' é a categoria do produto (doce, salgado ou bebida).
// 'index' é a posição do produto dentro do array da categoria.
const calcularPreco = (tipo, index) => {
  return produtos[tipo][index].preco;
};

// Calculando o valor final somando os preços de um refrigerante, um risolis e um brigadeiro.
// Usando a função 'calcularPreco' para obter os preços.
final =
  calcularPreco("bebida", 0) +
  calcularPreco("salgado", 2) +
  calcularPreco("doce", 1);
// precoBebida[0] = 2 (refrigerante)
// precoSalgado[2] = 3 (risolis)
// precoDoce[1] = 3 (brigadeiro)

// Imprimindo o valor final no console.
console.log(final); // Saída: 8
