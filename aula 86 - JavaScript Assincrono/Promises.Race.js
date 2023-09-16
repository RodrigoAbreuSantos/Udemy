//Trabalhamos com promisses quando vamos fazer algo assincrono que é algo que não temos certeza quando vai terminar
/*
Promise.all ==> Vai tentar resolver todas promessas, se uma der errado ele rejeita todas

Promise.race ==> Ele vai passar todas as promessas, a primeira que resolver ele entrega o valor, se a primeira promessa for um erro ele vai te entregar o erro e vice-versa

Promise.resolve ==> Vai entregar uma promessa ja resolvida de cara, ou seja vc não precisa resolver ela, sempre cai no then

Promise.reject ==> Vai entregar uma promessa rejeitada de cara, sempre cai no catch
*/

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
                return; //Ele quer que pare de executar depois que achou o erro
            }
            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo)
    });   
}

const promises = [  // o primiero valor não é uma promisse é um valor ja resolvido, ja o resto são promessas
    //'Primeiro valor',  //Ele sempre vai entregar o que ja esta resolvido primeiro, então vamos tirar
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)), //essa promise esta errada, se for executada vai cair no erro
    //'Outro Valor'
];

Promise.race(promises)//ELe vai mandar todas as promessas, a primeira que resolver ele entrega
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => { //vc pode passar 10 promessas, mas se tiver um erro ele sempre vai cair no erro
        console.log(erro);
    })
