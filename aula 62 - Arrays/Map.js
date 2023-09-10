//Semelhante ao filter, mas muda o retorno final. Filter filtra o array, vc pode deter um array do mesmo tamanho do array ou menor
//Map altera os valores do array, na map vc vai receber um array exatemente do mesmo tamanho do array original, so que com os arrays alterados. Entao ela vai gerar um novo array com os valores alterados

//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobraValores = numeros.map(valor => valor * 2);//vc quer mapear os valores de numero para os novos valores

//ENTAO MAP ALTERA O VALOR DO ARRAY, NAO ALTERA O VALOR ORIGINAL, MAS ELE USA O VALOR DO ARRAY ORIGINAL PARA CRIAR O NOVO ARRAY. VAI TER SEMPRE O MESMO TAMANHO DO ARRAY ORIGINAL

/*
const dobraValores = numeros.map(valor => {
    return valor * 2;
})
*/

console.log(dobraValores);