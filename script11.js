// Definindo um array de nomes de instrumentos
const instrumentos = ["guitarra", "bateria", "Violao", "teclado"];

// Definindo um array de preços correspondentes aos instrumentos na mesma ordem
const instPrecos = [1200.0, 3000.0, 500.0, 515.0];

// Definindo um array de quantidades para cada instrumento, na mesma ordem
const qtds = [3, 5, 12, 3];

// Inicializando a variável para armazenar o valor final do cálculo
let valorFinal = 0;

// Calculando o valor final para o primeiro instrumento na lista com base na quantidade especificada
valorFinal = qtds[0] * instPrecos[0];

// Exibindo o valor final no console
console.log(valorFinal); // Saída: 3600
