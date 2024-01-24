const lanche = "eu"

if (lanche.toLocaleLowerCase() === "x-tudo") {
  console.log("R$12,00")
} else if (lanche.toLocaleLowerCase() === "x-bacon") {
  console.log("R$10,00") 
} else if (lanche.toLocaleLowerCase() === "x-salada") {
  console.log("R$8,00")
} else {
  console.log("Não existe esse lanhce!")
}