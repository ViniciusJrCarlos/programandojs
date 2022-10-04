function calcularRaiz(){

    //cria referencia aos elementos da pagina

    let InNumero = document.getElementById("InNumero");
    let OutResposta = document.getElementById("OutResposta");
    let numero = Number(InNumero.value);

    //se nao preencher ou nan 
    if(numero == 0 || isNaN(numero)){

        alert("Informe um numero Válido...");
        InNumero.focus();
        return;

    }
    //calcula a raiz quadrada de um numero
    let raiz = Math.sqrt(numero);

    //se valor da variavel raiz igual a este valor arredondado para baixo
    if(raiz == Math.floor(raiz)){

        OutResposta.textContent = "Raiz: " + raiz; //mostra a raiz 

    }else{

        //senao exibe a mensagem indicando que nao ha raiz exata
        OutResposta.textContent = "Não há raiz exata para " + numero;

    }


}

//cria referencia ao elemento btexibir e registra evento que ira carregar function

let BtExibir = document.getElementById("BtExibir");
BtExibir.addEventListener("click", calcularRaiz);

