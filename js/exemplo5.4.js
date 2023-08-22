let criancas = [];


function adicionarCriancas(){

    //cria referencia aos elementos campos de entrada de dados

    let InNome = document.getElementById("InNome");
    let InIdade = document.getElementById("InIdade");

    let nome = InNome.value;
    let idade = Number(InIdade.value);

    //verifica preenchimento dos campos

if (nome == "" || InIdade.value == "" || isNaN(idade)) {

    alert("Informe corretamente os dados");
    InNome.focus();
    return;
    
}

//adiciona dados ao vetor de objetos

criancas.push({nome: nome, idade: idade });

//limpa campos e posiciona cursor em inNome

InNome.value = "";
InIdade.value = "";
InNome.focus();

listarCriancas();

}

//cria referencia ao btadicionar e associa function ao evento click deste botao

let BtAdicionar = document.getElementById("BtAdicionar");
BtAdicionar.addEventListener("click", adicionarCriancas);

function listarCriancas() {

    //verifica se vetor esta vazio
    if (criancas.length == 0) {

        alert("Não há criancas na lista");

        return;
        
    }



let lista = "";

//pecorre os elementos do vetor

    for (let i = 0; i < criancas.length; i++) {
        //const element = array[i];
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
        
    }

//exibe a lista em uma unica instrucao

document.getElementById("OutLista").textContent = lista;

}

let BtListar = document.getElementById("BtListar");
BtListar.addEventListener("click", listarCriancas);


function resumirLista() {

    //verifica se vetor esta vazio

    if (criancas.length == 0) {

        alert("Não há crianças na lista");
        
    }

    let copia = criancas.slice();
    //ordena o vetor copia por idade
    copia.sort(function(a, b) { return a.idade - b.idade });
    //para concatenar a saida
    let resumo = "";
    //menor idade do vetor ordenado
    let aux = copia[0].idade;
    //vetor para inserir nomes de cada idade
    let nomes = [];

    //percorre os elementos do vetor classificado por idade

    for (let i = 0; i < copia.length; i++) {
        //se é da mesma idade auxiliar adiciona o vetor

        if (copia[i].idade == aux) {

            nomes.push(copia[i].nome);

        
        } else {


            //senao, adiciona ao resumo, dados e nomes inseridos em nomes[]
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";

            //obtem a nova idade na ordem
            aux = copia[i].idade;
            //limpa o vetor de nomes
            nomes = [];
            //adiciona o primeiro da nova idade
            nomes.push(copia[i].nome);



        }
        
    }

    //adiciona os nomes da ultima idade ordenada

    resumo += aux + " anos: " + nomes.length + " criancas - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";

    //altera conteudo de OutLista

    document.getElementById("OutLista").textContent = resumo;

}

let BtResumir = document.getElementById("BtResumir");
BtResumir.addEventListener("click", resumirLista);

