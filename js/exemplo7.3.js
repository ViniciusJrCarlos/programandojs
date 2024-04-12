function mostrarDados() {


    //cria referencia aos elementos da pagina

    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPreco = document.getElementById("inPreco");

    var outClassif = document.getElementById("outClassif");
    var outPrecoVenda = document.getElementById("outPrecoVenda");

    //obtem o conteudo dos campos de entrada de dados

    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);


    //valida o preenchimento dos campos

    if(modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {

        alert("Informe corretamente os dados do veiculo") {

            inModelo.focus();
            return;
        }


        //chama e atribuui o retorno das funcoes as variaveis

        var classificacao = classificarVeiculo(ano);
        var precoVenda = calcularVenda(preco, classificacao);
        
        //exibe as respostas

        outClassif.textContent = modelo + " - " + classificacao;
        outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
    }

    


}



let btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", mostrarDados);