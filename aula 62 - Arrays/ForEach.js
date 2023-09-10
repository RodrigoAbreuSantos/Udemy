// É uma forma diferente de iterarmos sobre arrays. Ele só esta disponivel dentro de arrays
// É como se fosse um filter, map ou reduce, mas ele vai apenas fazer um for nos valores mais nada

const a1 = [10,20,30,40,50,60,70,80,90]

for (let valor of a1){
    console.log(valor);
}


let total = 0

a1.forEach(function(valor, indice, array){ // assim como o filter e o map ele recebe o valor, indice e o array
    total += valor
    console.log(`Valor: ${valor} no Indice: ${indice} e o total é: ${total}`);
});

let total2 = 0

a1.forEach((valor, indice, array) => {
    total2 += valor
});
console.log(total2);