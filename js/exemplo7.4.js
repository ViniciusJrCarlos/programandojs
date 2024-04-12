let btExibir = document.getElementById("btExibir");

//ao clicar no botao, a progrmaacao da funcao e executada

btExibir.addEventListener("click", function () {


    //cria referencia aos elementos da pagina
    let inPreco = document.getElementById("inPreco");

    let outParcelas = document.getElementById("outParcelas");

    let preco = Number(inPreco.value);

    //vai acumular as formas de pagamento

    let lista = "";

    //cria uma repeticao para montar as opcoes de pagamento

    for(let i = 1; i <= 10; i++) {

        //acumula em lista o nº de parcelas e o calculo do valor

        lista += i + " x de R$: " + (preco / i).toFixed(2) + "\n"; 

    }

    //exibe a lista no elemento outParcelas

    outParcelas.textContent = "Opcoes de Pagamento \n\n " + lista;
});

