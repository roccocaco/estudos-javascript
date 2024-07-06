let products = [
  { name: "caneta", value: 2.3, quantity: 3 },
  { name: "caderno", value: 13.4, quantity: 2 },
  { name: "borracha", value: 4.2, quantity: 5 },
];

// Função de redução para calcular o total
let total = products.reduce((acc, product) => {
  return acc + product.value * product.quantity;
}, 0);

console.log(total); // Saída: 56.40
