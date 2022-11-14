function verificarPrimo(){

    //cria referencia aos elementos da pagina

    let InNumero = document.getElementById("InNumero");
    let OutResposta = document.getElementById("OutResposta");

    let num = Number(InNumero.value);

    if (num == 0  || isNaN(num)) {

        alert("Numero Inválido....");
        InNumero.focus();
        return;
        
    }

    //declara e inicia o contador
    var numDivisores = 0;

    //percorre todos os possiveis divisores do numero
    for (let i = 1; i <= num; i++){
        //verifica se é divisor do num
        if (num % 1 == 0) {
            
            numDivisores++;

        }       
    }

    //se possue apenas 2 divisores, é primo
    if (numDivisores == 2) {
        
        OutResposta.textContent = num + " É primo";

    }else {

        OutResposta.textContent = num + " Não é primo";

    }

}

//referencia elemento e após associa funcion ao evento click

let btVerificarPrimo  = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo);