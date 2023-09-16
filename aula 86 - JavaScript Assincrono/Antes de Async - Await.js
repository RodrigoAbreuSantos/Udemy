//O THEN É PARA QUANDO CHAMAMOS UMA PROMISE E PARA PEGAR O VALOR RESOLVIDO NO RESOLVE() USAMOS O THEN

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('Cai no Erro');
                return; 
            }
            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo)
    });   
}


esperaAi('Fase 1', rand(0, 3))
    .then(valor => {
        console.log(valor)// vai retornar o que estiver dentre do resolve e o que esta dentro do resolve é o parametro msg + Passei na promise, o prametro msg aqui é a Fase 1
        return esperaAi('Fase 2', rand(0, 3));
    })
    .then(valor2 =>{
        console.log(valor2); //toda vez que vc retorna uma promise vc precisa de um then para pegar o valor resolvido no resolve()
        return esperaAi('Fase 3', rand(0, 3));
    })
    .then(valor3 => {
        console.log(valor3);
        return valor3;
    })
    .then(respFinal => {
        console.log('Terminamos na Fase:',respFinal);
    })
    .catch(erro => {
        console.log(erro);
    })

//Independente do tempo que uma for chamada ela so vai ser executada depois que a primeira for finalizada 
    
