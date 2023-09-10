//Para Cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto



const pessoa = [ // ele criou um array, que cada indice do array é um objeto e dentro de cada objeto tem chave e valor
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoa.map(objeto => objeto.nome) // vai retornar um novo array apenas com os nomes das pessoas 

/*
const nomes = pessoa.map(valor => {
    return valor.nome
})
*/

console.log(nomes)

const removeNome = pessoa.map(objeto => { // vai retornar um array apenas com as idades
    delete objeto.nome
    return objeto
})

console.log(removeNome)

const addId = pessoa.map((objeto, indice) => { // vai adicionar id dentro do array
    const novoObjt = {...objeto} // vc ta copiando o objeto original, para assim não fazer referencia
    novoObjt.id = indice // esta adionando no objeto copia a chave id em determinado indice
    //objeto.id = indice ==> isso estaria adionando um id no novo array e no array antido, pois vc esta fazendo referencia 
    console.log(novoObjt)
})

console.log(addId)