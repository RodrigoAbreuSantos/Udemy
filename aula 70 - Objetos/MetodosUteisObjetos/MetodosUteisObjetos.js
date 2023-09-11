/*
Object.values ==> Retorna um array com os valores das chaves de um objeto - Linha 37
Object.entries ==>Retorna um array com com array de chaves e array de valores dentro dele [[ chaves ], [ valor ]]
Object.assign(des, any) ==> É como se fosse um spread 
Object.getOwnPropertyDescriptor(object, 'prop') ==> vai mostrar a propriedade da chave do objeto selecionado. 
... (spread) ==> Linha 22

Object.keys ==> retorna as chaves do objeto em um array
Object.freeze ==> congela o objeto, significa que o objeto não pode ser alterado
Object.defineProperties ==> define varias propriedade
Object.defineProperty ==> define uma propriedade
*/

//objetos, assim como arrays são valores passados por referencia

const produto = {nome: 'Caneca' , preco: 1.8};
const outraCoisa = produto; //linkamos essa nova variavel com a variavel produto

outraCoisa.nome = 'Luiz';
console.log(produto , outraCoisa);

const produto2 = {nome: 'Vaso' , preco: 3};
const outraCoisa2 = { ...produto2, material: 'porcelana' } // assim vc esta copiando o objeto e não linkando ele
outraCoisa2.preco = 5;

outraCoisa.nome = 'Ana';
console.log(produto2 , outraCoisa2);
console.log(Object.keys(outraCoisa2));


Object.defineProperty(produto2, 'nome', {
    writable: false
});

console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'));

console.log(Object.values(produto2));

console.log(Object.values(produto2));

for (let entry of Object.entries(produto2)){
    console.log(entry); // em cada iteração do laço vai mostrar um array com a chave e seu valor
}

for (let [chave, valor] of Object.entries(produto2)){
    console.log(chave, valor); // o [] é um destracture que vai tirar o objeto de dentro de um array
}








