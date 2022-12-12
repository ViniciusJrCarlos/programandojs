let pacientes = [];

function adicionarPaciente(){


    //cria referencia aos elementos de entrada e saida de dados da pagina

    let InPaciente = document.getElementById("InPaciente");
    let OutLista = document.getElementById("OutLista");


    let nome = InPaciente.value;
    //obtem nome do paciente

    //verifica preenchimento do nome do paciente

    if (nome == "") {

        alert("Informe o nome do Paciente");
        InPaciente.focus();
        return;
        
    }

    //adiona o nome no final do vetor
    pacientes.push(nome);

    //string para concatenar pacientes
    let lista = "";

    //pecorre os elementos do vetor
    for (i = 0;  i < pacientes.length; i++) {
        lista += (i + 1) + " . " + pacientes[i] + "\n";

        
    }

    //altera o conteudo da tag outlist

    OutLista.textContent = lista;

    //limpa campo e posiona cursor em InPaciente

    InPaciente.value = "";
    InPaciente.focus();

}

//cria referencia ao btAdicionar e associa function ao evento click

let BtAdicionar = document.getElementById("BtAdicionar");
BtAdicionar.addEventListener("click", adicionarPaciente);


function atenderPaciente(){

    //verifica o vetor está vazio ou não

    if(pacientes.length == 0){

        alert("Não há pacientes na lista de espera");
        InPaciente.focus();
        return;

    }

    let OutAtendimento = document.getElementById("OutAtendimento");
    let OutLista = document.getElementById("OutLista");

    /**
     remove o paciente do inicio da fila e obtem o nome
    
     */

     let atender = pacientes.shift();

     /** exibe nome do paciente em atendimento */

     OutAtendimento.textContent = atender;

     /** string para concatenar pacientes */

     let lista = "";

     /** for que pecorre o vetor de elementos */

     for (i = 0;  i < pacientes.length; i++) {
        lista += (i + 1) + " . " + pacientes[i] + "\n";

        
     }

     /** altera o conteuudo da tag outlista */
     OutLista.textContent = lista;


}

//cria referencia aos elementos de saida de dados
let BtAtender = document.getElementById("BtAtender");
BtAtender.addEventListener("click", atenderPaciente);


/** FUNCAO URGENCIA */


function atendimentoUrgenciaPaciente(){


    //cria referencia aos elementos de entrada e saida de dados da pagina

    let InPaciente = document.getElementById("InPaciente");
    let OutLista = document.getElementById("OutLista");


    let nome = InPaciente.value;
    //obtem nome do paciente

    //verifica preenchimento do nome do paciente

    if (nome == "") {

        alert("Informe o nome do Paciente");
        InPaciente.focus();
        return;
        
    }

    //adiona o nome nome no inicio do vetor
    pacientes.unshift(nome);

    //string para concatenar pacientes
    let lista = "";

    //pecorre os elementos do vetor
    for (i = 0;  i < pacientes.length; i++) {
        lista += (i + 1) + " . " + pacientes[i] + "\n";

        
    }

    //altera o conteudo da tag outlist

    OutLista.textContent = lista;

    //limpa campo e posiona cursor em InPaciente

    InPaciente.value = "";
    InPaciente.focus();

}

//cria referencia ao btAdicionar e associa function ao evento click

let BtUrgencia = document.getElementById("BtUrgencia");
BtUrgencia.addEventListener("click", atendimentoUrgenciaPaciente);


//////////////////////////