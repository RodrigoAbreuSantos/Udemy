const nomes = ['Luis', 'Otavio', 'Henrique'];


//for (let i = 0; i< nomes.length; i++){
//    console.log(nomes[i]);
//}

//for (let i in nomes){ // 
//    console.log(nomes[i]);
//}

for (let valor of nomes){ // vai pegar o valor de nome. O for of retorna o valor e o for in retorna o indice
    console.log(valor);
}
console.log('')

nomes.forEach(function (valor, indice, array) { // o forEach vai receber o valor e pode receber o indice tambem. E caso vc tambem queira vc pode ter tambem o array de volta
    console.log(valor, indice, array);
})

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

for (let chave in pessoa){
    console.log(pessoa[chave])
}

//For classico - Geralmente com iteraveis 
//For in - Retorna o indice ou chave (string, array ou objetos)
//For if - Retorna o valor em si (iteraveis, arrays ou strings)