function saudacao(nome){
    return `Bom dia ${nome}` 
}

saudacao('Maria');

const variavel = saudacao('Rodrigo');
console.log(variavel)

// A função retornou Bom dia mais o parametro dentro dela. Ele criou uma variavel chamada variavel que recebia a função saudação recebendo como parametro o nome. Depois ele printou a variavel que recebia a função



function soma(a = 1, b = 1){
    const resultado = a + b;
    return resultado

}

console.log(soma(4, 1));
console.log(soma(26, 5));
console.log(soma(3, 7));

const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9));

const raiz2 = (n) => {
    return n ** 0.5;
}

console.log(raiz2(9));