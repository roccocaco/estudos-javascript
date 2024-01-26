let products = [{
  name: 'caneta',
  value: 2.30,
  quantity: 3
},
{
  name: 'caderno',
  value: 13.40,
  quantity: 2
},
{
  name: 'borracha',
  value: 4.2,
  quantity: 5
}
]

let total = products.reduce(calculate, 0, 1, 2,3);

function calculate (total, products) {
return total + (item.value * item.quantity);
}



