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