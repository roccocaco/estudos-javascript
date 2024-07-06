// Declarando uma variável 'idade' e atribuindo o valor 15 a ela
const idade = 15;

// Declarando uma variável 'possuiCarro' e atribuindo o valor 1 (true) a ela
const possuiCarro = 1;

// Verificando se a idade é maior ou igual a 18
if (idade >= 18) {
  console.log("O usuário pode fazer a carteira");
  // Esta mensagem não será exibida porque idade é 15
}

// Verificando se a idade é menor ou igual a 17
if (idade <= 17) {
  console.log("O usuário não pode fazer a carteira");
  // Esta mensagem será exibida porque idade é 15
}

// Verificando se 'possuiCarro' é true (não zero)
if (possuiCarro) {
  console.log("O usuário já pode andar de carro");
  // Esta mensagem será exibida porque possuiCarro é 1 (true)
}

// Declarando uma variável 'nome' e atribuindo a string "Antenor" a ela
const nome = "Antenor";

// Verificando se o nome é igual a "Rocco"
if (nome == "Rocco") {
  console.log("O seu nome é Rocco");
  // Esta mensagem não será exibida porque nome é "Antenor"
}

// Verificando se o nome não é igual a "Rocco"
if (nome != "Rocco") {
  console.log("o meu nome não é Rocco");
  // Esta mensagem será exibida porque nome é "Antenor"
}

// Verificando se 20 é maior que 10
if (20 > 10) {
  console.log("Passou");
  // Esta mensagem será exibida porque 20 é maior que 10
}

// Verificando se 10 é menor que 20
if (10 < 20) {
  console.log("Passou 2");
  // Esta mensagem será exibida porque 10 é menor que 20
}
