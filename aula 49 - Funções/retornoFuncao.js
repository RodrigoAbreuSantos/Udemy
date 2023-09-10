//return
//Retorna um valor
//termina a função


function soma(a, b){
    return a + b;
}
soma(3, 7)

function criaPessoa (nome, sobrenome){
    return { // o return contem um objeto
        nome: nome,
        sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(p1);
console.log(p2);

function falaFrase(comeco){
    function falaResto(resto){ 
        return comeco + ' ' + resto;// esse return é da função falaResto
    }
    return falaResto;
    //return falaResto; // esse return é da função falaFrase. So que esse return retorna a função falaResto sem executar ela, e quando vc retorna uma função sem executar ela, vc retorna função em si
}

const fala = falaFrase('Ola');
const resto = fala('Mundo');
console.log(resto);

/*
function duplica(n){
    return n*2
}
function triplica(n){
    return n*3;
}
function quatriplica(n){
    return n*4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quatriplica(2));
*/


function criaMultiplicador(multiplicador){ // é uma função que dentro dela tem uma função que retorna o n * o multiplicador e retorna a multiplicação dessa função
    //multiplicador
    function multiplicacao(n){
        return n * multiplicador;
    }
    return multiplicacao
}


const duplica = criaMultiplicador(2); // primeiro pega o numero
const triplica = criaMultiplicador(2);
const quatriplica = criaMultiplicador(2);

console.log(duplica(2)); // depois pega o multiplicador
console.log(triplica(3));
console.log(quatriplica(4));

/*
function criaMultiplicador(multiplicador){ // é uma função que cria e ja retorna de cara uma outra função
    return function(n){
        return n * multiplicador;
    }
}
*/