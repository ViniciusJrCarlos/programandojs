function converterDuracao(){

    //cria referencia aos elementos da pagina

    var InTitulo = document.getElementById("InTitulo");
    var InDuracao  = document.getElementById("InDuracao");
    var OutTitulo  = document.getElementById("OutTitulo");
    var OutResposta = document.getElementById("OutResposta");

    //obtem conteudo dos campos de entrada
    var titulo  =  InTitulo.value;
    var duracao = Number(InDuracao.value);

    //arredonda para baixo o resultado da divisao

    var horas = Math.floor(duracao / 60);
    // obtem o resto da divisao entre os numeros
    var minutos = duracao % 60;

    //altera o conteudo dos paragrafos da resposta

    OutTitulo.textContent = titulo;
    OutResposta.textContent = horas + "hora(s) e " + minutos + "minuto(s)";

}
//cria uma referencia ao elemento btconverter (botao)

var btconverter = document.getElementById("btconverter");

//registra um evento associado ao botao, para carregar uma funcao

btconverter.addEventListener("click", converterDuracao);


