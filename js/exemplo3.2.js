function calcularPeso(){

    //cria referencia aos elementos manipulados pela function

    var InNome = document.getElementById("InNome");
    var RbMasculino = document.getElementById("RbMasculino");
    var RbFeminino = document.getElementById("RbFeminino");
    var InAltura = document.getElementById("InAltura");
    var OutResposta = document.getElementById("OutResposta");

    //obtem o conteudo dos campos de edicao da pagina

    var nome = InNome.value;
    var masculino = RbMasculino.checked;
    var feminino = RbFeminino.checked;
    var altura = Number(InAltura.value);

    //verifica se nome foi preenchido e sexo selecionado

    if(nome == "" || (masculino == false && feminino == false)){

        alert("Por Favor, Informe o nome e selecione o sexo...");

        InNome.focus();
        return;
    }

    //se altura vazio 0 ou nan not a number - um texto for informado por exemplo

    if(altura == 0 || isNaN(altura)){

        alert("Por Favor,  Informe a altura corretamente...");
        InAltura.focus();
        return;

    }

    //se masculino significa se masculino == true

    if(masculino){

        var peso = 22 * Math.pow(altura, 2); 

    }else{

        var peso = 21 * Math.pow(altura, 2);


    }

    //apresenta a resposta altera o conteudo da linha OutResposta

    OutResposta.textContent = nome  + ": Seu Peso ideal é " + peso.toFixed(3) + "kg";
}

//cria referencia ao elemento btcalcular e registra evento associado e calcular o peso

var BtResultado = document.getElementById("BtCalcular");
BtCalcular.addEventListener("click", calcularPeso);

function limparCampos(){

    //limpar os conteudos dos elementos

    document.getElementById("InNome").value = "";
    document.getElementById("RbMasculino").checked = "";
    document.getElementById("RbFeminino").checked = "";
    document.getElementById("InAltura").value = "";
    document.getElementById("OutResposta").textContent = "";
    //posiciona o foco no elemento innome

    document.getElementById("InNome").focus();



}
var BtLimpar = document.getElementById("BtLimpar");
BtLimpar.addEventListener("click", limparCampos);