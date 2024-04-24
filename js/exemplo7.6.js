var itens = []; //vetor glogal para armazenar itens do pedido

function trocarItem() {

    //cria referencia aos elementos select

    var inPizza = document.getElementById("inPizza");
    var inBebida = document.getElementById("inBebida");
    var outPedido = document.getElementById("outPedido");
    //se estiver marcado

    if(rbPizza.checked) {

        //inBebida.className = "oculta"; //oculta o select de bebidas
        //inPizza.className = "exibe"; //exibe select das pizzas
        var num = inPizza.selectedIndex;
        var produto = inPizza.options[num].text;
    
    } else {

        //inPizza.className = "oculta"; //oculta as pizzas
        //inBebida.className = "exibe"; //exibe as bebidas
        var num = inBebida.selectedIndex;
        var produto = inBebida.options[num].text;
        var detalhes = inDetalhes.value;
        itens.push(produto + " (" + detalhes + ")");
        outPedido.textContent = itens.join("\n");

        limparCampos();
   
    }

}

//cria a referencia aos radios buttons e associa funcao no evento change

//var rbPizza = document.getElementById("rbPizza");
//rbPizza.addEventListener("change", trocarItem);

//var rbBebida = document.getElementById("rbBebida");
//rbBebida.addEventListener("change", trocarItem);

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);


function limparCampos() {

    rbPizza.checked = true;
    inBebida.className = "oculta";
    inPizza.className = "exibe";
    inPizza.selectedIndex = 0;
    inDetalhes.value = "";
    rbPizza.focus();

}

