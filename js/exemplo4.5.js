let NumContas = 0;
let ValTotal = 0;

//variavel string que acumuila as contas
let resposta = "";

function registrarConta(){

    //cria referencia aos elementos da pagina manipulados pela function

    let InDescricao = document.getElementById("InDescricao");
    let InValor =  document.getElementById("InValor");
    let OutListaContas = document.getElementById("OutListaContas");
    let OutTotal = document.getElementById("OutTotal");
    
    //obtem conteudo dos campos
    let descricao = InDescricao.value;
    let valor = Number(InValor.value);

    //verifica preenchimento dos campos
    if (descricao == "" || valor == 0 || isNaN(valor)) {

        alert("Informe os dados corretamente...");
        InDescricao.focus();

        return;
        
    }


    //adiciona valores ao contador e acumlador
    NumContas++;
    ValTotal = ValTotal + valor;
    
    //concatena as contas
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    //altera o conteudo das tags de resposta
    OutListaContas.textContent = resposta + "---------------------------------------";
    OutTotal.textContent = NumContas + " Conta(s) - Total R$: " + ValTotal.toFixed(2);

    //limpa campos e posiciona cursor em inDescricao
    InDescricao.value = "";
    InValor.value = "";
    InDescricao.focus();


}

//referencia elemento e após associa fcuntion no evento ao click

let BtnRegistrar = document.getElementById("BtnRegistrar");
BtnRegistrar.addEventListener("click", registrarConta);