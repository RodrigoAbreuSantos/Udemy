/*
Estados das Promises:

Pending ==> O estado incial da promise, quando vc manda ela executar ela vai estar pendente. Uma promise que esta sendo executada e ainda não retornou o valor, então se vc não usar a palavra then ou await vc não vai ter retornado o valor, logo sua promise vai ser pendente. Então a promise foi para o servidor estava sendo executada quando eu pedi para ver o valor dela e ela ainda não tinha esse valor

Fullfiled ==> Representação da promise resolvida

Reject ==> Uma promise rejeitada

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
                return; 
            }
            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo)
    });   
}


const teste2 = esperaAi('qualquer', 5000);
console.log(teste2); //vamos ter uma promise pending, porque pedimos para ver o valor dela e ela ainda não foi finalizada. PARA EVITAR ISSO, USAMOS O AWAIT OU O THEN/CATCH