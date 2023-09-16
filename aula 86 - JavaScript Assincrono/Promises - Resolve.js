//VC CRIA UMA PROMISSE USANDO O CONSTRUCTOR DA PROMISSE, VC VAI RECEBER 2 PARAMETROS: O PRIMEIRO SEMPRE QUE VC QUISER RESOLVER UMA PROMESSA EM QUALQUER LUGAR DO CODIGO. NA FUNÇÃO esperaAi ELE ESPEROU O TIMEOUT TERMINAR PARA RESOLVER A PROMISSE, PORQUE ELE SABIA QUE ERA ALI QUE IRIA DEMORAR, ELE RESOLVER SÓ ALI DENTRO. ENTÃO ESSA PROMESSA VAI FICAR PENDENTE ATE QUE CHEGUE NO RESOLVE, DEPOIS QUE CHEGOU NO RESOLVE ESSA PROMESSA VAI CAIR NO .THEN(). E AI TODO O RESOLVE VAI CAIR NO .THEN() .THEN() E ASSIM POR DIANTE. SE VC DER UM REJECT É A MESMA COISA SÓ QUE O REJECT VAI DIRETO PRO CATCH E AI VC TRATA O ERRO DA MANEIRA QUE VC QUISER

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){

    //Resolve ==> Esse codigo executou com sucesso, então resolve ele para mim
    //Reject ==> Deu um erro no codigo rejeita isso aqui para mim
    return new Promise((resolve, reject) => {// estamos chamando o constructor da Promisse e dentro dele vamos receber uma função.
        setTimeout(() => {
            resolve(msg);//vc esta resolvendo sua promisse logo depois que o setTimeout foi executado
            // vai vai resolver essa promessa onde vc iria chamar o calback
            //ele jogou a msg num paremtro unico de resolve
        }, tempo)
    });

    
    
}
//esse then sera executado quando resolvermos a nossa promisse. Então sempre que a gente chamar resolve o .then() sera executado. O then tambem recebe funções.
//Como vc ta resolvedo sua função e mandando um dado nela, esse dado vai vir no then tambem

//Vc pode retornar outra promisse dentro de um then

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => { // vc ta pegando o arg que ta vindo do resolve();
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3)) //para pegar o dado dessa promisse vc precisa encadear um outro then
    })
    .then(resposta => { // esse parametro do then é o parametro que esta dentro do resolve
        console.log(resposta)
        return esperaAi('Tratando os dados da BASE', rand(1, 3)) // esta retornando uma outra promisse
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibir dados na tela')
    })


console.log('Isso sera exibido antes de qualquer promisse'); //as promisses são em paralelos, ele vai executar seu codigo, jogar as promisses para executar depois e na hora que as promisses terminarem de executar que ele voltar e te falar e por isso que se chama codio assincrono


//A Frase 2 só pode ser executada depois que a 1 for executada e a 3 só pode ser executada depois que a 2 for executada. Então precisamos de uma maneira de falar pro java script executar primeiro uma coisa depois outra coisa, não importando o tempo que aquilo demora para chegar. Um jeito seria usando funções de calback como em baixo, mas isso é uma gambiarra. Então as promisses são uma forma de fazer isso de uma forma limpa

/*
function esperaAi(msg, tempo, calback){
    setTimeout(() =>{
        console.log(msg)
    
    if(calback) calback();
    }, tempo)
}

esperaAi('Frase 1', rand(1, 3), () => {
    esperaAi('Frase 2', rand(1, 3), () => {
        esperaAi('Frase 3', rand(1, 3));
    });
})

*/