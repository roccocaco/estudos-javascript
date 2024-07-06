const lanche = "X-tudo";  // Definição da variável 'lanche' com o valor "X-tudo"
const bebida = "lata";    // Definição da variável 'bebida' com o valor "lata"

let resultado = 0;  // Inicialização da variável 'resultado' para armazenar o custo total do pedido

// Switch para determinar o preço do lanche com base no valor de 'lanche'
switch (lanche.toLocaleLowerCase()) {
  case "x-tudo":
    resultado += 12;  // Adiciona 12 ao 'resultado' se o 'lanche' for "x-tudo"
    break;
  case "x-bacon":
    resultado += 10;  // Adiciona 10 ao 'resultado' se o 'lanche' for "x-bacon"
    break; 
  case "x-salada":
    resultado += 8;   // Adiciona 8 ao 'resultado' se o 'lanche' for "x-salada"
    break;
  default:
    // Se 'lanche' não corresponder a nenhuma opção válida, não altera 'resultado'
    break;
}

// Switch para determinar o preço da bebida com base no valor de 'bebida'
switch (bebida.toLocaleLowerCase()) {
  case "lata":
    resultado += 12;  // Adiciona 12 ao 'resultado' se 'bebida' for "lata"
    break;
  case "1-litro":
    resultado += 10;  // Adiciona 10 ao 'resultado' se 'bebida' for "1-litro"
    break; 
  case "2-litros":
    resultado += 8;   // Adiciona 8 ao 'resultado' se 'bebida' for "2-litros"
    break;
  default:
    // Se 'bebida' não corresponder a nenhuma opção válida, não altera 'resultado'
    break;
}

// Verificação para garantir que pelo menos um item foi selecionado
if (resultado === 0) {
  console.log("Não temos essas opções!");  // Imprime mensagem se nenhum item válido foi selecionado
} else {
  console.log(`O seu pedido custou R$ ${resultado},00`);  // Imprime o custo total do pedido
}
