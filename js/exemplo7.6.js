var itens = []; //vetor glogal para armazenar itens do pedido

function trocarItem() {

    //cria referencia aos elementos select

    var inPizza = document.getElementById("inPizza");
    var inBebida = document.getElementById("inBebida");
    //se estiver marcado

    if(rbPizza.checked) {

        inBebida.className = "oculta"; //oculta o select de bebidas
        inPizza.className = "exibe"; //exibe select das pizzas

    
    } else {

        inPizza.className = "oculta"; //oculta as pizzas
        inBebida.className = "exibe"; //exibe as bebidas
    }

}

//cria a referencia aos radios buttons e associa funcao no evento change

var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

