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

    let aux = -1; //variavel auxiliar para indicar linha selecionada

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
let btSelecionar.addEventListener("click", selecionarTarefa);