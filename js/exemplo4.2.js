function listarNumeros(){

    //cria referencia aos elementos que a function ira manipular

    let InNumero = document.getElementById("InNumero");
    let OutResposta = document.getElementById("OutResposta");

    let numero = Number(InNumero.value);

    //verifica validade do numero 

    if (numero == 0 || isNaN(numero)) {

        alert("Informe um número válido");
        InNumero.focus();
        return;

    }

    //inicializa variavel resposta

    let resposta = "Entre " + numero + " e 1: " ;

    //cria um for decrescente

    for (let i = numero; i > 0; i = i - 1) {
        //const element = array[i];
        //resposta vai acumulando numeros e virgulas

        resposta = resposta + i + ", ";

    }

    //altera o conteudo de outResposta
    OutResposta.textContent = resposta;



}

let BtDecrescer = document.getElementById("BtDecrescer");
BtDecrescer.addEventListener("click", listarNumeros);