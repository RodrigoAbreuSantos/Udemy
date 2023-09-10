function retornaFuncao(nome){
    return function(){ // essa função tem acesso a 3 escopos. Ela, a mãe dela que é a retornaFuncao e o escopo global
        return nome
    }
}

const func = retornaFuncao('Luiz'); // isso aqui não vai mais mudar vai ser sempre luiz
const func2 = retornaFuncao('Otavio'); // isso aqui não vai mais mudar vai ser sempre Otavio
console.log(func);
console.log(func2);

console.log(func(), func2());

// chama de closure quando vc declara a função e ela não vai mais mudar