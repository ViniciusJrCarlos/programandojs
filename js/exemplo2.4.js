function calcularPreco(){

    //cria referencia aos elementos da pagina

    var InQuilo = document.getElementById("InQuilo");
    var InConsumo = document.getElementById("InConsumo");
    var OutValor = document.getElementById("OutValor");

    //obtem conteudo dos campos de entrada

    var quilo = Number(InQuilo.value);
    var consumo = Number(InConsumo.value);

    //calculo valor a ser pago

    var valor = (quilo / 1000) * consumo;
    //altera o conteudo da linha de resposta

    OutValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);


}

//cria referencia ao elemento btCalcular

var btCalcular = document.getElementById("btCalcular");

//registra um evento associado ao botao, para carregar uma funcao

btCalcular.addEventListener("click", calcularPreco);