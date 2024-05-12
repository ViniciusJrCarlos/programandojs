function trocarClube() {

    //cria referencia aos elementos da pagina

    let imgClube = document.getElementById("imgClube");
    let divTitulo = document.getElementById("divTitulo");

    //define variavel que ira receber o nome do clube
    let clube;

    //verifica qual radiobutton esta selecionado

    if(rbBrasil.checked) {

        clube = "Brasil";

    }else if (rbPelotas.checked) {

        clube = "Pelotas";

    } else {

        clube = "Farroupilha";
    }

    //define as classes de divTitulo: row e cores do clube

    divTitulo.className = "row cores"+clube;

    //modifica a imagem de acordo com a selecao do cliente

    imgClube.src = "img/" + clube.toLowerCase() +  ".png";
    imgClube.className = "exibe";
    imgClube.alt = "Simbolo do " + clube;

    //salva no navegador a escolha do cliente
    localStorage.setItem("clube", clube);
}

let rbBrasil = document.getElementById("rbBrasil");
let rbPelotas = document.getElementById("rbPelotas");
let rbFarroupilha = document.getElementById("rbFarroupilha");

//associa ao evento change a function trocarClube

rbBrasil.addEventListener("change", trocarClube);
rbPelotas.addEventListener("change", trocarClube);
rbFarroupilha.addEventListener("change" trocarClube);

