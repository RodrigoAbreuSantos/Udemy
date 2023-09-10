// LEMBRANDO FILTER NÃO ALTERA O ELEMENTO, SO FILTRA O ELEMENTO
// Filter, map, reduce
// Filter ==> vai filtrar o array. Sempre retorna um array com a mesma quantidade de elementos ou menos
// map ==> vai modificar o array
// reduce ==> vai reduzir o array em um unico valor


// O filter vai filtrar os valores, usando o filter vc recebe automaticamente 3 parametros, o valor o indice e o array completo. Muitas pessoas dentro do proprio filter criam uma função anonima com o parametro do valor e retornando o valor com uma certa condição. Vc pode usar função normal ou arrow function

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoa = [ // ele criou um array, que cada indice do array é um objeto e dentro de cada objeto tem chave e valor
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomePessoaLetrasGrandes = pessoa.filter(objeto => { 
    return objeto.nome.length >= 5 ? console.log(objeto) : false
})
// vai pegar como parametro o objeto, porque cada posição do array é um objeto, vai retornar o objeto com a chave nome vendo se seu tamanho é maior ou igual a 5
console.log('')
const pessoaMais50Anos = pessoa.filter(objeto => {
    return objeto.idade > 50 ? console.log(objeto) : false
})// vai criar uma função anonima com o prametro objeto, e vai retornar o objeto se o objeto na chave idade for maior que 50 anos
console.log('')

const pessoaTerminaComA = pessoa.filter(objeto => {
    return objeto.nome.toLowerCase().endsWith('a') ? console.log(objeto) : false;
})

// vai criar uma função anonima que recebe como parametro o objeto que é esta dentro de um array e o indice desse array é cada objeto. EU retornei o objeto.nome que significa o objeto com a chave nome. Tambem coloquei tudo em LowerCase para não dar erro e tambme usei o endsWith para pegar a ultima letra 

