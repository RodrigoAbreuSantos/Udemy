// Filter, map, reduce
// Filter ==> vai filtrar o array. Sempre retorna um array com a mesma quantidade de elementos ou menos
// map ==> vai modificar o array
// reduce ==> vai reduzir o array em um unico valor


// O filter vai filtrar os valores, usando o filter vc recebe automaticamente 3 parametros, o valor o indice e o array completo. Muitas pessoas dentro do proprio filter criam uma função anonima com o parametro do valor e retornando o valor com uma certa condição. Vc pode usar função normal ou arrow functions


// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados2 = numeros.filter(valor => valor > 10 ) // muitas pessoas vão usar o filter desse jeito usando a função anonima com o parametro valor e retornando o valor. Quando a função tem só uma linha o return é implicito então o valor vai ser o return da função. Então explicando essa arrow function ele criou uma função anonima passando como parametro o valor e retorna o valor se for maior que 10, o => é como se fosse o function numa function normal

console.log(numerosFiltrados2);


const numerosFiltrados = numeros.filter( (valor, indice, array) =>{ 
    console.log(`Valor: ${valor} - Indice: ${indice} ==> ${array}`)
    return valor > 10 
})



/*Metodo COMPLICADO
function callbackFilter(valor){ // só de vc utilizar filter e passar essa função para o filter essa função vai receber 3 parametros, então seria o valor do elemento o valor de cada um dos elementos ela vai iterar no seu array. Vai receber tambem o indice que esta sendo iterado e vc pode tambem utlizar o valor do array completo

    return valor > 10 ? valor : false

}
const numerosFiltrados = numeros.filter(callbackFilter);// o filter recebe uma função de callback, então essa função vai passar em cada elemento do array

console.log(numerosFiltrados);
*/



/* MEU METODO

let num = []

for (let numero of numeros){
    if (numero > 10){
        num.push(numero) // adicionando para dentro do array num os numeros maiores que 10
    }
}

console.log(num)
*/