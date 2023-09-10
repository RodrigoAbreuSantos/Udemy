// funções que são executas quando uma ação ocorre, quando uma ação finaliza
function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
function f1(callback){ // é uma função que pode ou não ser recebida aqui
    setTimeout(function(){
        console.log('f1');
        if (callback) callback(); // se callback foi recebido vai chamar a função callback();
    }, rand()); // o time esta aleatorio
}
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

/*
f1(function(){ // na hora que terminar o f1 o f2 vai ser executado, porque tem a função de callback. Então o o callback é uma funçãoque executa outra coisa quando algo termina. O f1 recebeu o parametro, então se ele recebeu o parametro ele faz um callback(). 
    f2(function(){
        f3(function(){
            console.log('Ola mundo');
        });
    });
});

*/

f1(f1Callback); // aqui chamamos o Callback de f1 que vai ser executado no function f1. Depois do do callback do f1 chama o callback fo f2 e assim vai indo

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callbak)
}

function f3Callbak(){
    console.log('Ola Mundo');
}