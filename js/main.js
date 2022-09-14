const nome = prompt("Digite o nome");

const calculaMedia = () => {
  let primeiroInput = document.getElementById("notaDoPrimeiroBimestre");
  let notaDoPrimeiroBimestre =
    primeiroInput.value === "" ? 0 : parseFloat(primeiroInput.value);

  let segundoInput = document.getElementById("notaDoSegundoBimestre");
  let notaDoSegundoBimestre =
    segundoInput.value === "" ? 0 : parseFloat(segundoInput.value);

  let terceiroInput = document.getElementById("notaDoTerceiroBimestre");
  let notaDoTerceiroBimestre =
    terceiroInput.value === "" ? 0 : parseFloat(terceiroInput.value);

  let quartoInput = document.getElementById("notaDoQuartoBimestre");
  let notaDoQuartoBimestre =
    quartoInput.value === "" ? 0 : parseFloat(quartoInput.value);

  let soma =
    notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre;

  let notaFinal = soma / 4;

  let notaFixada = notaFinal.toFixed(1);

  let resultadoFinal = verificaAprovacao(notaFixada);
  exibeResultadoNaTela(notaFixada, resultadoFinal);
};

const verificaAprovacao = (nota) => {
  let resultadoFinal = [];
  if (nota >= 7) {
    resultadoFinal[0] = "Aprovado";
    resultadoFinal[1] = "aproved";
  } else if (nota >= 5) {
    resultadoFinal[0] = "de Recuperação";
    resultadoFinal[1] = "recuperation";
  } else {
    resultadoFinal[0] = "Reprovado";
    resultadoFinal[1] = "failed";
  }
  return resultadoFinal;
};

const exibeResultadoNaTela = (nota, resultado) => {
  let retorno = document.getElementById("resultado");
  retorno.style.display = "block";
  retorno.innerHTML = `Bem vindo ${nome == "" ? "Anônimo" : nome}<br>
    Sua média foi ${nota}<br>
    Você está <span class='${resultado[1]}'>${resultado[0]}</span>!`;
};

const limpaNotas = () => {
  document.getElementById("notaDoPrimeiroBimestre").value = "";
  document.getElementById("notaDoSegundoBimestre").value = "";
  document.getElementById("notaDoTerceiroBimestre").value = "";
  document.getElementById("notaDoQuartoBimestre").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado").style.display = "none";
};
