function verSenha() {

    //cria referencia aos elementos da pagina

    let inSenha = document.getElementById("inSenha");
    let outResposta = document.getElementById("outResposta");

    //obtem o conteudo do campo de entrada

    let senha = inSenha.value;

    //vetor com erros
    let erros = [];

    //verifica se o tamanho da senha é invalido

    if(senha.length < 8 || senha.length > 15) {

        erros.push("possuir entre 8 e 15 caracteres");
    } 

    //verifica se não possui numeros
    if(senha.match(/[0-9]/g) == null){

        erros.push("possuir numeros (no minimo, 1)");

    }

    //verifica se não possui letras minusculas

    if(!senha.match(/[a-z]/g)) {

        erros.push("possuir letras minusculas (no minimo, 1)");

    }

    //verifica se nao possui letra maiusculas ou se possui apenas 1
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {

        erros.push("possuir letras maiusculas (no minimo, 2)");
    }

    //verifica se nao possui simbolos ou "_"

    if(!senha.match(/[\W|_]/g)) {

        erros.push("possuir simbolos (no minimo, 1)");

    }

    //se vetor está vazio (significa que nao foram encontrados erros)

    if(erros.length == 0) {

        outResposta.textContent = "Ok! Senha Válida";

    } else {

        outResposta.textContent = "Erros.... A senha deve " + erros.join(", ");
    }

}

//cria referencia ao botao e após associa function ao evento click

let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verSenha);

