// É como se fosse um spread, mas o pessoal usa mais o spread

const produto = {nome: 'Produto' , preco: 1.8};
const caneca = Object.assign({}, produto, { material: 'porcelana' });

caneca.nome = 'Caneca';
caneca.preco = 2.5;
console.log(produto, caneca);



const produto2 = {nome: 'Produto' , preco: 1.8};
const caneca2 = Object.assign({ nome: produto.nome, preco: produto.preco });// Se vc quiser pegar só uma propriedade especifica do objeto

caneca.nome = 'Caneca2';
caneca.preco = 2.8;
console.log(produto2, caneca2);