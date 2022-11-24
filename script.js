function notaMedia(){
let bim1 = parseFloat(document.getElementById("valor1").value);
let bim2 = parseFloat(document.getElementById("valor2").value);
let bim3 = parseFloat(document.getElementById("valor3").value);
let bim4 = parseFloat(document.getElementById("valor4").value);
console.log(bim1);
let notaMedia = (bim1+bim2+bim3+bim4)/4;
  console.log (notaMedia);
  let notaResult = document.getElementById("suaNota");
  let printNaTela = 0;
  if (notaMedia >= 7&&notaMedia<=10){
  printNaTela="Parabéns! você foi aprovado! sua nota é " + notaMedia.toFixed(1);
  } else if(notaMedia<7&&notaMedia>=0){
  printNaTela="Lamento, você não foi aprovado! sua nota é " + notaMedia.toFixed(1);
  }else{
    printNaTela="Nota inválida";
  }
  if(isNaN(bim1)||isNaN(bim2)||isNaN(bim3)||isNaN(bim4)){
    printNaTela="Insira uma nota em todos os campos por favor! Caso não possua nota, atribua nota zero!"
  }
  notaResult.innerHTML = printNaTela;
  
  document.getElementById("valor1").value = "";
  document.getElementById("valor2").value = "";
  document.getElementById("valor3").value = "";
  document.getElementById("valor4").value = "";
}
notaMedia();