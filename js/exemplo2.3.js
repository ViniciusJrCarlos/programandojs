function mostrarPromocao(){

    //cria referencia aos elementos manipulados pelo programa

    var InVeiculo = document.getElementById("InVeiculo");
    var InPreco = document.getElementById("InPreco");
    var OutVeiculo = document.getElementById("OutVeiculo");
    var OutEntrada =  document.getElementById("OutEntrada");
    var OutParcela = document.getElementById("OutParcela");

    var veiculo = InVeiculo.value;
    var preco = Number(InPreco.value);

    //calcula o valor da entrada e das parcelas

    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;

    //altera o conteudo dos paragrafos de resposta

    OutVeiculo.textContent = "Promoção: " + veiculo;
    OutEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    OutParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);


}

//cria referencia ao elemento btverPromocao 

var btverPromocao = document.getElementById("btVerPromocao");

//registre um evento associado ao botao, para carregar uma funcao

btverPromocao.addEventListener("click", mostrarPromocao);


