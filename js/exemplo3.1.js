function calcularMedia(){

    //criar referencia aos elementos da pagina

    var InNome = document.getElementById("InNome");
    var InNota1 = document.getElementById("InNota1");
    var InNota2 = document.getElementById("InNota2");
    var OutSituacao = document.getElementById("OutSituacao");
    var OutMedia = document.getElementById("OutMedia");


    //obtem os conteudos dos campos de edicao da pagina
    var nome = InNome.value;
    var nota1 = Number(InNota1.value);
    var nota2 = Number(InNota2.value);


    //calcula a média das notas

    var media = (nota1 + nota2) / 2;

    //apresenta a média (altera o conteudo do elemento outmédia)
    OutMedia.textContent = "Média das notas: " + media.toFixed(1);

    //cria condicao

    if(media >= 7){

        //altera o texto e estilo da cor do elemento outSituacao

        OutSituacao.textContent = "Parabéns " + nome + "! Você Foi Aprovado(a)";
        OutSituacao.style.color = "green";

    }else if(media >= 4){
        OutSituacao.textContent = "Atenção " + nome + "! Você está em exame ";
        OutSituacao.style.color = "blue";

    }else{

        OutSituacao.textContent = "Ops " + nome + "... Você foi Reprovado(a)";
        OutSituacao.style.color = "red";
    }


}

//cria referencia ao elemento btresultado botao

var btResultado = document.getElementById("btResultado");
//registro um evento associado ao botao, para carregar uma funcao

btResultado.addEventListener("click", calcularMedia);