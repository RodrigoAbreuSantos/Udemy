//Trabalhamos com promisses quando vamos fazer algo assincrono que é algo que não temos certeza quando vai terminar
/*
Promise.all ==> Vai tentar resolver todas promessas, se uma der errado ele rejeita todas

Promise.race ==> Ele vai passar todas as promessas, a primeira que resolver ele entrega o valor, se a primeira promessa for um erro ele vai te entregar o erro e vice-versa

Promise.resolve ==> Vai entregar uma promessa ja resolvida, ou seja vc não precisa resolver ela

Promise.reject ==> 
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

function baixaPagina(){ //essa função espera que o que seja retornado dela é uma promessa
    const enCache = false;

    if (enCache){  
        return Promise.resolve('Pagina em cache'); //ele vai entregar uma promessa resolvida, então vc não precisa passar na função esperaAi para resolver essa promessa
    }
    else{
        return esperaAi('Baixei a pagina', 3000); //vai passar na esperaAi e resolver a promessa e retornar o valor resolvido
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(erro => {
        console.log(erro)
    });