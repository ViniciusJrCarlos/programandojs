function gerarCracha() {

    //cria referencia aos elementos da pagina

    let inNome =  document.getElementById("inNome");
    let outCracha = document.getElementById("outCracha");

    //obtem o conteudo do campo de entrada

    let nome = inNome.value;

    //se vazio ou se nao ha espaco no nome
    if(nome == "" || nome.indexOf(" ") == -1) {

        alert("Informe o nome completo do participante...");
        inNome.focus();
        return;

    }

    let priEspaco = nome.indexOf(" "); //posicao do primeiro espaço
    let ultEspaco = nome.lastIndexOf(" "); //posicao do ultimo espaco

    //copia nome e sobrenome usando os parametros do substr()

    let cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    //altera o texto identificado na pagina por outCracha
    outCracha.textContent = "Crachá: " + cracha;


}

//cria referencia ao botao e apos associa function ao evento click

let btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);

