function preencherEstrelas(){

    //cria referencia aos elementos html manipulados pela function

    let InNumero = document.getElementById("InNumero");
    let OutEspacos =  document.getElementById("OutEspacos");


    //obtem conteudo do campo innumero
    let num = Number(InNumero.value);

    if (num == 0 || isNaN(num)) {
        
        alert("Número Inválido....");
        InNumero.focus();
        return;
        
    }

    //declara variavel que irá concatenar as estrelas e tracos
    let estrelas = "";

    for (let i = 1; i <= num; i++){
        
        if (i % 2 == 1) {

            estrelas = estrelas + "*";
            
        }else{

            estrelas = estrelas + "-";

        }

       

    }

    OutEspacos.textContent = estrelas;

}

    //cria btPreencher ao botao e após asssocia function ao envento click

    let BtPreencher = document.getElementById("BtPreencher");
    BtPreencher.addEventListener("click", preencherEstrelas);
