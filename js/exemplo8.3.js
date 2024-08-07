function incluirAposta() {

    //cria referência aos elementos de entrada de dados da pagina

    let inNome  = document.getElementById("inNome");
    let inPeso = document.getElementById("inPeso");

    let nome = inNome.value;
    let peso = Number(inPeso.value);

    //se vazios ou not a number (nan)

    if(nome == "" || peso == 0 ||isNaN(peso)) {

        alert("Informe nome e peso da aposta"); //exibe alerta
        inNome.focus(); //joga cursor em nome
        return; //abandona execucao da function
    }

    //chama a funcion que verifica se o peso ja foi apostado

    if(verApostaExiste(peso)) {

        alert ("Alguem já apostou este peso, informe outro");
        inPeso.focus();
        return;
    }

    //se houver dados salvos no localstorage

    if(localStorage.getItem("melanciaNome")) {

        //obtem o conteudo ja salvo e acrescenta dados da aposta
        let melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        let melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

        //salva os dados em localstorage


        //se nao é a primeira aposta nao tem ;
    } else {

        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);

    }

    mostrarApostas(); //chama function que mostra as apostas ja salvas
    inNome.value = ""; //limpa os campos do form
    inPeso.value = "";
    inNome.focus(); //joga o foco (cursor) no campo innome

}

//cria 