//Reduz o array em um unico elemento

//Some todos os numeros (reduce)
//Retorne um array um array com os pares (Filter)
//Retorne um array com o dobre de valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//O reduce tem 4 parametros: acumulador, valor, indice e o array. fora da função vc tambem pode receber o valor inicial do acumulador. O valor incial é o valor que vc quer que inicie o parametro do acumulador

const totalNumeros = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor // vai adicionar o valor no acumulador em cada vez que passa uma posição
    return acumulador // o ultimo valor do acumulador foi retornado para a varivel totalNumeros
}, 0)// o acumulador esta iniciando com 0

console.log(totalNumeros)

const arrayPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0){// vai ver se o valor é par
        acumulador.push(valor); // vai adicionar o valor no array acumulador
    }
    return acumulador // esta retornando o array para a variavel arrayPares
},[])// esta definindo que o acumulador é um array

console.log(arrayPares);


/* Usando o filter
const par = numeros.filter(valor => {
    if (valor % 2 === 0){
        return valor
    }
})

console.log(par)
*/



const dobroValor = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor*2); // esta adionado no array acumulador o valor*2
    return acumulador //esta retornado o array acumulador
},[])//esta definindo que o acumulador é um array
console.log(dobroValor)

