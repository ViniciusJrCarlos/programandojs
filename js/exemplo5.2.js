let erros = [];

/** declara o vetor de escopo global que irá conter os numeros já postados
 * 
 */
/** gera um numero aleatorio entre 1 a 100 */
let sorteado = Math.floor(Math.random() * 10) + 1;

/** declara a constante com o numero de chances */

const CHANCES = 6;

function apostarNumero(){


    /** cria referencia ao campo de entrada e obtem seu conteudo */

    let InNumero = document.getElementById("InNumero");
    let numero = Number(InNumero.value);


    //valida o numero
    if (numero <= 0 || numero > 10|| isNaN(numero)) {

        alert("Informe um número válido....");
        InNumero.focus();
        return;
        
    }

    /** referencia espaços das saidas de dados */

    let OutDica = document.getElementById("OutDica");
    let OutErros = document.getElementById("OutErros");
    let OutChances = document.getElementById("OutChances");


    /** se aposta do jogador for igual ao numero sorteado */
    if (numero == sorteado) {

        alert("Parabéns!! Você acertou!!!");
        
        /** troca status dos botoes */
        BtApostar.disabled = true;
        BtJogar.className = "exibe";
        OutDica.textContent = "Parabéns!! Numero Sorteado: " + sorteado; 
        
    } else{

        /** se numero existe no vetor erros */

        if (erros.indexOf(numero) >= 0) {
            
            alert("Você já apostou o número " + numero + ". Tente outro....");


        }else{

            erros.push(numero); //adiciona numero ao vetor
            let numErros = erros.length; //obtem tamanho do vetor

        

        let numChances = CHANCES - numErros; //calcula o numero de chances

        //exibe n de erros, conteudo do vetor e n de chances

        OutErros.textContent = numErros + "(" + erros.join(" , ") + ")";
        OutChances.textContent = numChances;

        if (numChances == 0) {

            alert("Suas chances acabaram....");
            BtApostar.disabled = true;
            BtJogar.className = "exibe";
            OutDica.textContent = "Game Over !! Número Sorteado: " + sorteado;
            
        }else{

            /** usa operador ternário condicional para mensagem da dica */

            let dica = numero < sorteado ? "maior" : "menor";

            OutDica.textContent = "Dica: Tente um numero " + dica + " que " + numero;

        }

    }

}

/** limpa campo de entrada e posiciona cursor neste campo */

InNumero.value = "";
InNumero.focus();


}

let BtApostar = document.getElementById("BtApostar");
BtApostar.addEventListener("click", apostarNumero);

function jogarNovamente(){

    location.reload();

}
let BtJogar = document.getElementById("BtJogar");
BtJogar.addEventListener("click", jogarNovamente);