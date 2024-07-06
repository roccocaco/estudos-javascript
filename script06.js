const lanche = "eu"; // Declaração da variável 'lanche' e atribuição do valor "eu"

// Verificação do valor da variável 'lanche' convertido para minúsculas
if (lanche.toLocaleLowerCase() === "x-tudo") {
  console.log("R$12,00"); // Se 'lanche' for "x-tudo", imprime o preço no console
} else if (lanche.toLocaleLowerCase() === "x-bacon") {
  console.log("R$10,00"); // Se 'lanche' for "x-bacon", imprime o preço no console
} else if (lanche.toLocaleLowerCase() === "x-salada") {
  console.log("R$8,00"); // Se 'lanche' for "x-salada", imprime o preço no console
} else {
  console.log("Não existe esse lanche!"); // Se 'lanche' for qualquer outro valor, imprime mensagem de erro no console
}
