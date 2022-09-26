function calcularFuso(){

    //cria uma referencia aos elementos da pagina

    var InHoraBrasil = document.getElementById("InHoraBrasil");
    var OutHoraFranca = document.getElementById("OutHoraFranca");

    //obtem e converte o conteudo do campo inhorabrasil

    var HoraBrasil = Number(InHoraBrasil.value);

    //se nao preencheu out not-a-number (nan)
    if(InHoraBrasil.value == "" || isNaN(HoraBrasil)){

        alert("Informe a hora do Brasil Corretamente...");
        InHoraBrasil.focus();
        return;

    }
    var HoraFranca =  HoraBrasil + 5;

    //se passar das 24h da franca...
    if(HoraFranca > 24){

        HoraFranca = HoraFranca - 24;


    }

    //exibe a resposta altera conteudo do elemento outhorafranca

    OutHoraFranca.textContent = "Hora na França: " + HoraFranca.toFixed(2);

}

//cria uma referencia ao elemento btexibir e registra evento associado a function

var btexibir = document.getElementById("BtExibir");
btexibir.addEventListener("click", calcularFuso);