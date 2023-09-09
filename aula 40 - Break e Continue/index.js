const numeros = [1, 2, 3, 4, 5, 6, 7, 8 , 9];

for (let numero of numeros){ // se o numero for igual a 2 vai continuar para o proximo numero. Quando tem o continue o java script vai voltar para o começo do laço, mas na proxima iteração
    if (numero === 2){
        continue; // sempre colocamos o codigo que não queremos que seja executado embaixo da palavra continuo
    }
    if (numero === 5){
        continue;
    }
    if (numero === 7){
        break // na hora que encontrar a palavra break vai acabar a repetição ali
    }
    console.log(numero);
}

let i = 0
while (i < numeros.length){
    i++;
    let numero = numeros[i];

    if (numero === 2){
        continue; 
    }
    if (numero === 5){
        continue;
    }
    if (numero === 7){
        break 
    }
    console.log(numero);
}
