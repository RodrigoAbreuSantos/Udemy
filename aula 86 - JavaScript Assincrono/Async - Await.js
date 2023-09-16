//As palavras async e await vão permitir que utilizamos promises dentro do corpo da função, como se essas promises fossem de forma sincrona. Como se fosse o then de um jeito mais limpo

//ASYNC VAI PERMITIR QUE VC USE A PALAVRA AWAIT DENTRO DE UMA FUNÇÃO, PARA VC ESPERAR UMA PROMISE SER FINALIZADA

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

async function executa(){//quando colocamos async na função podemos utilizar dentro dela uma palavra chamada await
    try{
        const fase1 = await esperaAi('Fase 1', rand(0, 3));
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand(0, 3));
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand(0, 3));
        console.log(fase3);

        const fase4 = await esperaAi(4, rand(0,3));
        console.log(fase4);

        console.log('Terminamos na Fase:',fase4);
    }catch(erro){ //quando vc tem uma rejeição vc cai no catch
        console.log(erro)
    }
}

executa();

//Essa função parece uma função normal, unica diferença é que tem as palavras aysnc e await para esperar as promesas