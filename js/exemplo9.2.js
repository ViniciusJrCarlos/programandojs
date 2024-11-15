function exibirMoedas() {

    let num1_00 = Math.ceil(Math.random() * 5);
    let num0_50 = Math.ceil(Math.random() * 5);
    let num0_25 = Math.ceil(Math.random() * 5);
    let num0_10 = Math.ceil(Math.random() * 5);

    //cria referencia ao local as imagens serao inseridas

    let divMoedas = document.getElementById("divMoedas");


    //texto alternativo das imagens para questoes de acessibilidade

    let alt1_00 = "Moedas em real";
    let alt0_50 = "Moedas de cinquenta centavos";
    let alt0_25 = "Moedas de vinte e cinco centavos";
    let alt0_10 = "Moedas de dez centavos";

    //chama o metodo criarMoedas passando argumentos

    criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00");
    criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50");
    criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25");
    criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10");


}

exibirMoedas();