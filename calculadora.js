function calcularKit() {
    let nro1 = document.getElementById("nro1").value

    let calculo
    if (nro1 >= 80) {
      resultado = "4000"
    }
    if ((nro1 >= 50, nro1 < 80)) {
      resultado = "2500"
    }
    if ((nro1 >= 20, nro1 < 50)) {
      resultado = "1000"
    }
    if ((nro1 >= 0, nro1 < 20)) {
      resultado = "0"
    }
    document.getElementById("calculo12").innerHTML =
      "Seu time pontuou " + resultado + " pontos"
  }
    document.getElementById("calculo").innerHTML = `Seu time pontuou ${resultado} pontos`;
  
  function calcularSangue() {
    let nro2 = parseInt(document.getElementById("nro2").value) || 0;
    let resultado = nro2 * 20;
  
    document.getElementById("calculo2").innerHTML = `Seu time pontuou ${resultado} pontos`;
  }
  function verificaChecagem(texto) {
    let elementId = `qtde${texto.charAt(0).toUpperCase() + texto.slice(1)}`;
    document.getElementById(elementId).disabled = !document.getElementById(texto).checked;
  }
  function calcularAdicional() {
    let total = 0;
    
    // verificar se cada item esta CHECADO
    if (document.getElementById("kit").checked) {
      total += 30 * parseInt(document.getElementById("qtdeKit").value) || 0;
    }
    if (document.getElementById("suplemento").checked) {
      total += 15 * parseInt(document.getElementById("qtdeSuplemento").value) || 0;
    }
    if (document.getElementById("arroz5").checked) {
      total += 5 * parseInt(document.getElementById("qtdeArroz5").value) || 0;
    }
    if (document.getElementById("arroz1").checked) {
      total += 1 * parseInt(document.getElementById("qtdeArroz1").value) || 0;
    }
    if (document.getElementById("feijao2").checked) {
      total += 2 * parseInt(document.getElementById("qtdeFeijao2").value) || 0;
    }
    if (document.getElementById("feijao1").checked) {
      total += 1 * parseInt(document.getElementById("qtdeFeijao1").value) || 0;
    }
    if (document.getElementById("macarrao").checked) {
      total += 0.5 * parseInt(document.getElementById("qtdeMacarrao").value) || 0;
    }
    if (document.getElementById("oleo").checked) {
      total += 1 * parseInt(document.getElementById("qtdeOleo").value) || 0;
    }
    
    document.getElementById("total").innerHTML = `Seu time pontuou ${total} pontos`;
  }
  function calcularAtividades() {
    // cada atividade
    let acaoSocial = parseInt(document.getElementById("acaoSocial").value) || 0;
    let apresentacaoMusical = parseInt(document.getElementById("apresentacaoMusical").value) || 0;
    let mascoteTime = parseInt(document.getElementById("mascoteTime").value) || 0;
    let quiz = parseInt(document.getElementById("quiz").value) || 0;
  
    // calc  pt total
    let pontuacaoTotal = acaoSocial + apresentacaoMusical + mascoteTime + quiz;
  
    document.getElementById("pontuacaoTotal").innerHTML = `Total: ${pontuacaoTotal} pontos`;
  }
  // calc geral
  function calcularPontuacaoGeral() {
    let pontuacaoTotal = 0;

    // Calc pt de kits de alimentação
    let nro1 = parseInt(document.getElementById("nro1").value) || 0;
    if (nro1 >= 80) {
        pontuacaoTotal += 4000;
    } else if (nro1 >= 50) {
        pontuacaoTotal += 2500;
    } else if (nro1 >= 20) {
        pontuacaoTotal += 1000;
    } else {
        pontuacaoTotal += 0;
    }

    // calc pt de doacao de sangue
    let nro2 = parseInt(document.getElementById("nro2").value) || 0;
    pontuacaoTotal += nro2 * 20;

    // calc pt de itens adicionais
    if (document.getElementById("kit").checked) {
        pontuacaoTotal += 30 * parseInt(document.getElementById("qtdeKit").value) || 0;
    }
    if (document.getElementById("suplemento").checked) {
        pontuacaoTotal += 15 * parseInt(document.getElementById("qtdeSuplemento").value) || 0;
    }
    if (document.getElementById("arroz5").checked) {
        pontuacaoTotal += 5 * parseInt(document.getElementById("qtdeArroz5").value) || 0;
    }
    if (document.getElementById("arroz1").checked) {
        pontuacaoTotal += 1 * parseInt(document.getElementById("qtdeArroz1").value) || 0;
    }
    if (document.getElementById("feijao2").checked) {
        pontuacaoTotal += 2 * parseInt(document.getElementById("qtdeFeijao2").value) || 0;
    }
    if (document.getElementById("feijao1").checked) {
        pontuacaoTotal += 1 * parseInt(document.getElementById("qtdeFeijao1").value) || 0;
    }
    if (document.getElementById("macarrao").checked) {
        pontuacaoTotal += 0.5 * parseInt(document.getElementById("qtdeMacarrao").value) || 0;
    }
    if (document.getElementById("oleo").checked) {
        pontuacaoTotal += 1 * parseInt(document.getElementById("qtdeOleo").value) || 0;
    }

    // calc pt das atv sociais
    let acaoSocial = parseInt(document.getElementById("acaoSocial").value) || 0;
    let apresentacaoMusical = parseInt(document.getElementById("apresentacaoMusical").value) || 0;
    let mascoteTime = parseInt(document.getElementById("mascoteTime").value) || 0;
    let quiz = parseInt(document.getElementById("quiz").value) || 0;

    // add pt de atv sociais a pt total
    pontuacaoTotal += acaoSocial + apresentacaoMusical + mascoteTime + quiz;

    // Exibir pt total
    document.getElementById("pontuacaoGeral").innerHTML = `Pontuação Geral: ${pontuacaoTotal} pontos`;
}

  