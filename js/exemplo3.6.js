function CalcularNotas(){

    //cria uma referencia aos elementos da pagina

    let InSaque = document.getElementById("InSaque");
    let OutNotasCem = document.getElementById("OutNotasCem");
    let OutNotasCinquenta = document.getElementById("OutNotasCinquenta");
    let OutNotasDez = document.getElementById("OutNotasDez");

    //limpa mensagens caso, segunda execucao

    OutNotasCem.textContent = "";
    
    OutNotasCinquenta.textContent = "";

    OutNotasDez.textContent = "";

    let saque = Number(InSaque.value);
    //converte conteudo do campo insaque

    //se nao preencheu ou not a number (nan)

    if(saque == 0 || isNaN(saque)){

        alert("Informe o valor do saque corretamente");
        InSaque.focus();
        return;

    } 

    //verifica se saque nao é multiplo de 10

    if(saque % 10 != 0){

        alert("Valor inválido para notas disponiveis (R$ 10, 50, 100)");
        InSaque.focus();
        return;


    }

    //calcula notas de 100, 50 e 10

    let notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    let notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;

    let notasDez = Math.floor(resto / 10);

    //exibe as notas apenas se houver

    if(notasCem > 0){

        OutNotasCem.textContent = "Notas de R$ 100: " + notasCem;


    }
    if(notasCinquenta > 0){

        OutNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta;


    }

    if(notasDez > 0 ){

        OutNotasDez.textContent = "Notas de R$ 10: " + notasDez;

    }
    
}
    //cria referencia ao elemento btExibir e associa a function ao evento click

    let BtExibir = document.getElementById("BtExibir");
    BtExibir.addEventListener("click", CalcularNotas);

