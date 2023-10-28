function gerarEmail() {


    //cria referencia aos elementos da pagina
    let inFuncionario = document.getElementById("inFuncionario");
    let outEmail = document.getElementById("outEmail");

    //obtem conteudo do campo de entrada

    let funcionario = inFuncionario.value;

    //se vazio ou se nao há espaço no nome do funcionario

    if(funcionario == "" || funcionario.indexOf(" ") == -1) {

        alert("Informe o nome completo do funcionário....");
        inFuncionario.focus();
        return;
    }

    //divide o nome em itens de vetor, criados a cada ocorrencia do espaco

    let partes = funcionario.split(" ");
    let email = "";  //vai concatenar letras
    let tam = partes.length; //obtem nº itens do vetor partes

    //pecorre os itens do vetor (exceto o ultimo)...
    for(let i = 0; i < tam -1; i++) {

        email += partes[i].charAt(0); //e obtem a letra inicial de cada item

    }

    //concatena a letras iniciais com a ultima parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresas.com.br";

    //exibe email com letras minusculas

    outEmail.textContent = "E-mail: " + email.toLowerCase();


}

//cria referencia ao botao e apos asssocia function ao evento click

let btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarEmail);