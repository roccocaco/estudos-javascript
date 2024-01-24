const lanche = "x-tudo"
const bebida = "lata"

let resultado = 0

switch (lanche.toLocaleLowerCase()) {
  case "x-tudo":
    resultado += 12
    break;
  case "x-bacon":
    resultado += 10 
    break; 
  case "x-salada":
    resultado += 8
    break;
  default:
    break;
}

switch (bebida.toLocaleLowerCase()) {
  case "lata":
    resultado += 12
    break;
  case "1-litro":
    resultado += 10 
    break; 
  case "2-litros":
    resultado += 8
    break;
  default:
    break;
}
//verificar a quantidade
if (resultado === 0) {
  console.log("Não temos essas opcoes !")
} else {
  console.log(`o seu pedido custou R$ ${resultado},00`)

}