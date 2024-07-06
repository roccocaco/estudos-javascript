// Arrays de tipos de exames e preços correspondentes
const exames = ["sangue", "urina", "fezes", "colesterol"];
const preco = [50, 20, 30, 75];

// Cálculo do preço total para exame de fezes e colesterol
let resultado = preco[2] + preco[3];

// Exibição do resultado formatado no console
console.log(`O preço de um exame de fezes e colesterol é: R$ ${resultado},00`);
