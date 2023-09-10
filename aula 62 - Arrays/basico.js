//push ==> adiciona um elemento no final
//del ==> remove sem alterar o indice, deixando um buraco no array
//pop ==> remove elementos do array, pop trabalha no finla do array
//shift ==> remove no começo do array
//unshift ==> adiciona um elemento no começo 
//splice ==> faz tudo que as 4 de cima faz
//slice ==> fatia o array pega onde vc quer começar e onde vc quer terminar
//const novo = [...nome] ==> uma copia do array, sem interligar eles
//length ==> pega o tamanho do array
//split ==> separa a string e transforma em um array
//join ==> tranforma um array em uma unica string

const nomes = ['Eduardo', 'Maria', 'Joana'];

nomes[2] = 'João';

delete nomes[2];
console.log(nomes);

const nomes2 = new Array('Eduardo', 'Maria', 'Joana');

console.log(nomes2);

const novo = [...nomes2]; //copia do array

novo.push('João') //adiciona no final do array

console.log(novo);


const nome = 'Luis Otavio Miranda';
const nomes3 = nome.split(' ');
console.log(nomes3); // tornou uma string em array

const nomes4 = ['Luiz', 'Otavio', 'Miranda'];
const nome2 = nomes4.join(' ');
console.log(nome2); //tornou o array em string, uniu todos os elementos que são separados por um espaço