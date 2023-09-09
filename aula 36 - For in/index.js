const frutas = ['Pera', 'Maçã', 'Uva'];

//for (let i = 0; i< frutas.length; i++){
//    console.log(frutas[i]);
//}

for (let i in frutas){ // o for in le os indices do array ou as chaves do objeto
    console.log(frutas[i]);
}
console.log('\n');
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}
console.log(pessoa.nome); // vai no objeto pessoa chave nome e pega o seu conteudo
console.log('\n');

for (let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`); // aqui vai no objeto pessoa na chave que esta e pega o conteudo
}