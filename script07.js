const lanche = "X-tudo"; // Declaração da variável 'lanche' e atribuição do valor "X-tudo"

switch (lanche.toLocaleLowerCase()) {
  case "x-tudo":
    console.log("R$12,00"); // Se 'lanche' for "x-tudo", imprime o preço no console
    break;
  case "x-bacon":
    console.log("R$10,00"); // Se 'lanche' for "x-bacon", imprime o preço no console
    break;
  case "x-salada":
    console.log("R$8,00"); // Se 'lanche' for "x-salada", imprime o preço no console
    break;
  default:
    console.log("Não existe nenhum lanche!"); // Se 'lanche' for qualquer outro valor, imprime mensagem de erro no console
    break;
}
