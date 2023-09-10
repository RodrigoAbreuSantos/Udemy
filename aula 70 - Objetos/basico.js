const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

console.log(pessoa.nome);
console.log(pessoa['nome']);


const chave = 'nome'
console.log(pessoa[chave]);



const pessoa1 = new Object();

pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otavio'

console.log(pessoa1.nome);
console.log(pessoa, pessoa1);

delete pessoa1.nome;
