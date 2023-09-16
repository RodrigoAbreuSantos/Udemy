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
        if (typeof msg !== 'string'){
            reject('Cai no Erro');
            return; //Ele quer que pare de executar depois que achou o erro
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo)
    });   
}

const promises = [  // o primiero valor não é uma promisse é um valor ja resolvido, ja o resto são promessas
    'Primeiro valor',  
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 4000),
    'Outro Valor'
];

Promise.all(promises)//resolva todas essas promisses aqui e retorna um then com todos esses valores resolvidos
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => { //vc pode passar 10 promessas, mas se tiver um erro ele sempre vai cair no erro
        console.log(erro);
    })
