let carros = [];

function adicionarCarros(){


    /** cria referencia aos elementos contendo os dados de entrada */

    let InModelo = document.getElementById("InModelo");
    let InPreco = document.getElementById("InPreco");

    let modelo = InModelo.value;
    let preco = Number(InPreco.value);

    /** verifica preenchimento dos campos */

    if (modelo == "" || preco == 0 || isNaN(preco)) {

        alert("Informe corretamente os dados");
        InModelo.focus();
        return;
    }

    /** adiciona dados ao vetor de objetos */
    carros.push({ modelo: modelo, preco: preco });

    /** limpa campos e posiciona cursor em inmodelo */

    InModelo.value = "";
    InPreco.value = "";
    InModelo.focus();

    /** chama function que lista os carros */
    listarCarros();

}

let BtAdicionar = document.getElementById("BtAdicionar");
BtAdicionar.addEventListener("click", adicionarCarros);


//document.getElementById("OutLista").textContent = lista;

function listarCarros() {

/** verifica se vetor está vazio */

if (carros.length == 0) {

    alert("Não há carros na lista");

    return;
    
}

let lista = "";


/** pecorre os elementos do vetor */

for (let i = 0; i < carros.length; i++) {

    /** adiciona a lista, cada objeto do vetor */

    lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";

    
}

/** referencia elemento e altera conteudo exibido */

document.getElementById("OutLista").textContent = lista;

}

let BtListar = document.getElementById("BtListar");
BtListar.addEventListener("click", listarCarros);


function filtrarCarros(){

    //** faz a leitura do valor máximo a partir do metodo prompt */

    let maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar? "));

    /** se nao preencheu ou conteudo invalido */

    if (maximo == 0 || isNaN(maximo)) {

        return;
        
    }

    /** para concatenar lista de carros que obedecem ao critério de pesquisa / filtro */
    let lista = "";

    /** percorre todos os elementos do vetor  */

    for (let i = 0; i < carros.length; i++) {
        
        /** verifica se o preco é inferior ou igual ao maximo */

        if (carros[i].preco <= maximo) {
            
            lista += carros[i].modelo + " - R$: " + carros[i].preco.toFixed(2) + "\n";
        }
        
    }


    /** cria referencia a outlista */
    let OutLista = document.getElementById("OutLista");

    /** se a lista está vazia, significa que nenhum veiculo foi encontrado (no for) */

    if (lista == "") {

        OutLista.textContent = "Não há carros com preço até R$ " + maximo.toFixed(2);

        
    }else {

        //senao, mostra os veiculos obtidos

        OutLista.textContent = "Carros até R$ " + maximo.toFixed(2) + "\n ------------------------------\n" + lista;

    }

}

let BtFiltrar = document.getElementById("BtFiltrar");
BtFiltrar.addEventListener("click", filtrarCarros);