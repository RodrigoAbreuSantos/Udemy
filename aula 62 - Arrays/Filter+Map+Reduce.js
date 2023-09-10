//Retorne a soma do dobro de todos os pares
// -> Filtras pares
// -> Dobrar Valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const somaDobroPares =  numeros.filter(valor => { // primeiro eu filtrei os valores usando o filter
    if (valor % 2 === 0){
        return valor;
    }
}).map(valor => { // com os valores filtrados eu alterei eles para que retornasse o dobre deles
    return valor * 2
}).reduce((acumulador, valor) => { 
    acumulador += valor;
    return acumulador
},0); // depois de dobrado os numeros pares eu reduzi eles a um unico elemento, fazendo a soma deles

console.log(somaDobroPares);




const somaDobroPares2 =  numeros
    .filter(valor => valor % 2 === 0) 
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor, 0);

console.log(somaDobroPares2);