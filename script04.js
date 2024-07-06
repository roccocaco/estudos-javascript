// Declarando uma variável 'idade' e atribuindo o valor 75 a ela
let idade = 75;

// Verificando se a idade é menor que 2
if (idade < 2) {
  // Se a condição for verdadeira, imprime "é um bebê" no console
  console.log("é um bebe");
} else if (idade < 10) {
  // Se a condição anterior for falsa, verifica se a idade é menor que 10
  // Se esta condição for verdadeira, imprime "é uma criança" no console
  console.log("é uma crianca");
} else if (idade < 18) {
  // Se as condições anteriores forem falsas, verifica se a idade é menor que 18
  // Se esta condição for verdadeira, imprime "é um adolescente" no console
  console.log("é um adolescente");
} else if (idade < 60) {
  // Se as condições anteriores forem falsas, verifica se a idade é menor que 60
  // Se esta condição for verdadeira, imprime "é um adulto" no console
  console.log("é um adulto");
} else {
  // Se todas as condições anteriores forem falsas, imprime "é um idoso" no console
  console.log("é um idoso");
}
