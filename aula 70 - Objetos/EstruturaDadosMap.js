const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

const novasPessoa = new Map()

for (const pessoa of pessoas){
    const { id } = pessoa
    novasPessoa.set(id, {...pessoa}) //ele vai setar o valor, ou seja ele vai modificar o valor. Ele vai colocar a chave desejada e no segundo argumentod set vai ser o valor desejado
}

console.log(novasPessoa)
console.log(novasPessoa.get(2))//aqui ele quer ver a pessoa 2

for (const pessoa of novasPessoa){ //aqui ele retornou um array para cada novaPessoa. Ou seja é um array que dentro dele tem uma chave que é o id de cada pessoa e o valor dessa chave id é um objeto com a chave id e nome e com os seus respectivos valores
    console.log(pessoa)
}

/*
const novasPessoa = {};

for (const pessoa of pessoas){
    //Dentro do array pessoas ele pegou cada objeto fazendo um for, depois ele criou uma variavel que recebe a chave id de cada objeto de pessoas. Depois com o objeto vazio novasPessoas ele fez com que a chave desse objeto fosse o id e para cada chave id tivesse um objeto com o id e nome da pessoa
    const { id } = pessoa// pegou o id separado da pessoa fazendo destruturação
    novasPessoa[id] = {...pessoa} //vai fazer o id ser a chave de cada objeto com o id e nome da pessoa
}
console.log(novasPessoa)


O PROBLEMA DESSE FOR É QUE O JAVA SCRIPT CONVERTEU PARA STRING O A CHAVE ID E COLOCOU EM ORDEM CRESCENTE DO VALOR ID DE CADA OBJETO, ASSIM DESCONSIDERANDO A ORDEM INICAL DO ARRAY PESSOAS
*/