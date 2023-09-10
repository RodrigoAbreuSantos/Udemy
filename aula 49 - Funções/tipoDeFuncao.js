// declaração de função (function hoisting) ==> vc pode chamar a função onde vc quiser, ou seja pode chamar ela emcima da função se vc quisesse 

falaOi();
function falaOi(){
    console.log('Oi');
}

// Firts class objects ==> Ela pode ser tratada como dado

const souUmDado = function(){ // vc ta falando que uma constante recebe uma função como dado. vc pode executar essa constante como uma função normal
    console.log('Sou um dado');
}


function executaFuncao(funcao){// aqui vc recebe o parametro. É como se fosse uma variavel que vc vai receber na função 
    console.log('Vou executar sua função abaixo')
    funcao();
}

executaFuncao(souUmDado) //Ele passou a função souUmDado para a função executaFuncao e ele executou ela normalmente

// Arrow function

const funcArrow =() => {
    console.log('Sou uma arrow function');
}

// Dentro de um objeto

const objeto = {
    falar: function() {
        console.log('Estou falando');
    }
}

objeto.falar();

const objeto2 = {
    falar(){
        console.log('Estou falando'); // vai ser um metodo dentro de um objeto
    }
}
objeto2.falar();

