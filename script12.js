const tipoPizza = "frango"; // Tipo da pizza desejada
const tamanhoPizza = "grande"; // Tamanho da pizza desejada

let indiceTipo = pizzas.indexOf(tipoPizza); // Encontra o índice do tipo de pizza
let indiceTamanho = tamanho.indexOf(tamanhoPizza); // Encontra o índice do tamanho

// Verifica se o tipo e tamanho existem nos arrays
if (indiceTipo !== -1 && indiceTamanho !== -1) {
  precoFinal = eval(
    `preco${
      tipoPizza.charAt(0).toUpperCase() + tipoPizza.slice(1)
    }[${indiceTamanho}]`
  );
} else {
  console.log("Pizza ou tamanho não encontrados.");
}

console.log(precoFinal); // Exibe o preço final calculado
