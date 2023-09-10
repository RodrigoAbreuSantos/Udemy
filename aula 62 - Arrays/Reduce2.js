// Retorne a pessoa mais velha

const pessoa = [ // ele criou um array, que cada indice do array é um objeto e dentro de cada objeto tem chave e valor
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];

const pessoaMaisVelha = pessoa.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) { // Ele ta checando uma propriedade do objeto com outra propriedade do objeto. Ele ta perguntando se a idade do primeiro é maior que a idade do segundo
        return acumulador //aqui ele esta retornando o objeto e não só a propriedade, porque senão vai ter comparação errada
    }
    return valor;
    

})

console.log(pessoaMaisVelha)


// vai ver se o acumulador é maior que o valor se o acumulador for maior vai retornar o acumulador e ir pro prximo objeto se ainda continuar sendo o maior vai retornar o acumulador que esta com a maior idade. SE o a idade do acumulador for menor que a do valor o acumulador vai passar a ser o valor