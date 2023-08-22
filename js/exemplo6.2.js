function montarDica() {

    //cria referencia aos elementos da pagina
    let inFruta = document.getElementById("inFruta");
    let outDica = document.getElementById("outDica");

    //obtem conteudo do campo de entrada
    let fruta = inFruta.value;

    //se vazio, exibe alerta, posiciona em infruta e retorna

    if(fruta == "") {

        alert("Informe a fruta...");
        inFruta.focus();
        return;

    }

    let resposta = fruta.charAt(0);
    let estrelas = "*";
    let tam = fruta.length;

    //pecorre os demais caracteres da fruta

    for(let i = 1; i < tam; i++) {

        //se a letra da posicao da variavel de controle for igual a primeira

        if(fruta.charAt(i) == fruta.charAt(0)) {

            resposta += fruta.charAt(0);

        } else {


            resposta +=  " _ ";

        }

        estrelas += "*";

     
    }

    //exibe a resposta e exibe estrelas (*) em inFruta

    outDica.textContent = resposta;
    inFruta.value = estrelas;

}

//cria referencia ao botao e apos associa function ao evento click

let btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarDica);
