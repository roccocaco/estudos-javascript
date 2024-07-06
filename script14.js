// Array de objetos representando exames com seus respectivos preços
const exames = [
  { exame: `urina`, preco: 50 },
  { exame: `fezes`, preco: 55 },
  { exame: `sangue`, preco: 75 },
  { exame: `colesterol`, preco: 80 },
];

// Exibição dos preços dos exames no console
console.log(
  `O preço do exame de ${exames[0].exame} custa ${exames[0].preco} reais`
);
console.log(
  `O preço do exame de ${exames[1].exame} custa ${exames[1].preco} reais`
);
console.log(
  `O preço do exame de ${exames[2].exame} custa ${exames[2].preco} reais`
);
console.log(
  `O preço do exame de ${exames[3].exame} custa ${exames[3].preco} reais`
);
