const lanche = "X-tudo"

switch (lanche.toLocaleLowerCase()) {
  case "x-tudo":
    console.log("R$12,00")  
    break;
  case "x-bacon":
    console.log("R$10,00") 
    break; 
  case "x-salada":
    console.log("R$8,00")
    break;
  default:
    console.log("Não esxite nenhum lanche !")
    break;
}