const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

console.log(pessoa);

const nome2 = pessoa.nome;
console.log(nome2);

//const { nome, sobrenome, idade } = pessoa; //ele ta passando um objeto e ta falando para extrair desse objeto pessoa a chave nome
//console.log(nome);

//const { nome: teste} = pessoa //ele ta falando que essa chave nome ele quer criar uma varivel teste
//console.log(teste, sobrenome)

//const { endereco: {rua, numero}} = pessoa;
//console.log(rua);

//const { nome, ...resto} = pessoa
//console.log(nome, resto);