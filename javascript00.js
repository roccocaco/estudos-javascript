// Definindo um array com diferentes gêneros musicais
const music = ["hiphop", "disco", "jazz", "blues", "soul"];

// Definindo um array com notas correspondentes a cada gênero musical
const grade = [7, 9, 5, 10, 5];

// Inicializando uma variável para armazenar o valor final da operação
let final = 0;

// Calculando o valor final somando a nota do primeiro gênero musical (hiphop) com
// a metade da nota do quinto gênero musical (soul)
final = grade[0] + grade[4] / 2;
// grade[0] = 7 (nota para hiphop)
// grade[4] = 5 (nota para soul)
// Calculando grade[4] / 2 = 5 / 2 = 2.5
// Somando 7 + 2.5 = 9.5

// Imprimindo o valor final no console
console.log(final); // Saída: 9.5
