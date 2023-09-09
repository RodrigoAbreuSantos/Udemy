/*
function retornaHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcDoInterval(){
    console.log(retornaHora());
}

setInterval(funcDoInterval, 1000) // a função funDoInterval vai ser executada de um em um segundo
*/

function retornaHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const time = setInterval(function(){ //vai ser executada de um em um segundo
    console.log(retornaHora());
}, 1000);

setTimeout(function(){ // vai parar o time quando passar 5 segundos
    clearInterval(time);
}, 5000);

setTimeout(function(){ 
    console.log('Ola mundo');
}, 5000);