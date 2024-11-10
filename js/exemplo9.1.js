function adicionarTarefa() {

    //cria referencia ao campo de entrada de dados
    let inTarefa = document.getElementById("inTarefa");

    let tarefa = inTarefa.value;
    //obtem o conteuudo digitado

    //se nao informou ...

    if(tarefa == "") {

        alert("Informe a tarefa"); //exibe alerta
        inTarefa.focus(); //posiciona no campo intarefa
        return; //retorna

    }

    //cria referencia ao elemento divQuadro (local onde tag h5 será inserida)

    let divQuadro = document.getElementById("divQuadro");
    let h5 = document.createElement("h5"); //cria o elemento html h5
    let texto = document.createTextNode(tarefa); //cria um texto

    h5.appendChild(texto); //define que o texto sera o filho do h5
    divQuadro.appendChild(h5); // e que sera o filho do divQuadro

    inTarefa.value = ""; //limpá o campo de edicao
    inTarefa.focus(); //joga o cursor nesse campo

}

//cria referencia ao btadicionar e apos associa o evento a funcao
let btAdicionar = document.getElementById("btAdicionar");

btAdicionar.addEventListener("click", adicionarTarefa);


function selecionarTarefa() {


    let h5 = document.getElementsByTagName("h5");
    let numH5 = h5.length;

    if(numH5 == 0) {

        alert("Não há tarefas para selecionar");

        return;

    }

    let aux = -1; 
    //variavel auxiliar para indicar linha selecionada

    //pecorre a lista de elementos h5 inseridos na pagina

    for(let i = 0; i < numH5; i++) {

        //se tag é da class tarefasSelecionada (esta selecionada)

        if(h5[i].className == "tarefaSelecionada") {

            h5[i].className = "tarefaNormal"; //troca para normal

            aux = i; //muda de valor para variavel auxiliar
            break;


        }
    }

    //se a linha que está selecionada é a ultima, ira voltar para a primeira

    if(aux == numH5 -1){

        aux = -1;

    }

    h5[aux + 1].className = "tarefaSelecionada"; //muda de estilo da proxima tag h5



}

let btSelecionar = document.getElementById("btSelecionar");

btSelecionar.addEventListener("click", selecionarTarefa);


function retirarSelecionada() {

    //cria referencia ao elemento que irá perder um filho

    let divQuadro = document.getElementById("divQuadro");
    let h5 = document.getElementsByTagName("h5");
    let numH5 = h5.length;

    let aux = -1;

    //pecorre a lista de elementos h5 inseridos na pagina

    for (let i = 0; i < numH5; i++) {

        //verifica className da tag h5

        if(h5[i].className == "tarefaSelecionada") {

            aux = i;
            break;


        }

    }

    //se nao ha tarefa selecionada ou se a lista esta vazia

    if(aux == -1) {

        alert("Selecione a tarefa para remove - la ");
        return;

    }

    //solicita confirmacao exibindo a tag selecionada
  if( confirm("Confirma Exclusao de '" + h5[aux].textContent + "' ?")) {

    divQuadro.removeChild(h5[aux]); //remove um dos filhos de divQuadro




  }



}

let btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada);

function gravarTarefas() {

    let h5 = document.getElementsByTagName("h5");
    let numH5 = h5.length;

    if(numH5 == 0) {

        alert("Nao ha tarefas para serem salvas");
        return;


    }

    let tarefas = "";

    //percorre a lista de h5 inseridos na pagina

    for(let i = 0; i < numH5; i++) {

        tarefas += h5[i].textContent + ";"; 

    }

    //grava em local storage as tarefas e remove o ultimo 

    localStorage.setItem("tarefasDia", tarefas.substr(0, tarefas.length -1));

    //confere se dados foram armazenados em local storage

    if(localStorage.getItem("tarefasDia")) {

        alert("OK! Tarefas Salvas");


    }

}

    let btGravar =  document.getElementById("btGravar");
    btGravar.addEventListener("click", gravarTarefas);
