const TAXA_MULTA = 2 / 100;  //multa por atraso
const TAXA_JUROS = 0.33 / 100; // juros por dia de atraso

function calcularMultaJuros() {


    //cria referencia aos elementos da página

    let inDataVenc = document.getElementById("inDataVenc");
    let inValor = document.getElementById("inValor");
    let outMulta = document.getElementById("outMulta");
    let outJuros = document.getElementById("outJuros");
    let outTotal =  document.getElementById("outTotal");


    //obtem os conteudos dos campos de entrada

    let dataVenc = inDataVenc.value;
    let valor = Number(inValor.value);

    //valida o preenchimento dos campos

    if(dataVenc == "" || valor == 0 || isNaN(valor)) {

        alert("Informe corretamente os dados da conta...");
        inDataVenc.focus();
        return;
    }

    //cria duas variaveis (instancia dois objetos) tipo data
    let hoje = new Date();
    let vencto = new Date();

    // a data vem no formato aaa-mm-dd
    let partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number(partes[1]) - 1);
    vencto.setFullYear(Number(partes[0]));


    //calcula a diferenca de dias entre as datas em milisegundos

    let atraso = hoje - vencto;

    let multa = 0; //inicializa multa e juros com 0
    let juros = 0;

    //se conta estiver emn atraso ...

    if(atraso > 0) {

        //converte os milissegundos da diferenca em dias

        // (1 dia = 24hor x 60 min x 60 seg x 1000 mseg: 86400000)
        
        // round(): necessario para periodos envolvendo horario de verao

        let dias = Math.round(atraso / 86400000);

        multa =  valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;
    

    }

    let total = valor + multa + juros; //calcula total

    outMulta.value = multa.toFixed(2); //exibe os valores com 2 decimais
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);


}

//cria referencia ao botao e apos associa funcion ao evento click


let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros); 


function limparCampos() {

    location.reload();

}
let btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", limparCampos);

