function MostrarTabuada(){

    //cria referencia aos elementos da paginas

    let InNumero = document.getElementById("InNumero");
    let OutTabuada = document.getElementById("OutTabuada");


    //converte conteudo do campo Innumero

    let numero = Number(InNumero.value);

    //valida o numero

    if (numero == 0 || isNaN(numero)) {

        alert("Informe um numero válido...");
        InNumero.focus();
        return;
    }

    //cria uma variavel do tipo string, que irá concatenar a resposta

    let resposta = "";

    //cria uma laço de repetição

    for (let i = 1; i <= 10; i++){
        //const element = array[i];
        //a variavel resposta vai acumulando os novos conteudos
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
    }

    //o conteudo da tag pre é alterado para exibir a tabuada do num
    OutTabuada.textContent = resposta;

}

//cria referencia ao botao e após associa function ao evento click

let BtMostrar = document.getElementById("BtMostrar");
BtMostrar.addEventListener("click", MostrarTabuada);