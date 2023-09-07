// {} ==> Objetos
// [] ==> Array

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Santos',
    idade: 25
};


console.log(pessoa1);
console.log(pessoa1.nome);

function criaPessoa(nome, sobrenome, idade){ //parametros //é uma função
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

        fala(){ // é um metodo
            console.log(`A minha idade atual é ${this.idade}`); //o this representa o objeto, então nesse contexto o this vai representar o criaPessoa
        },

        incrementaIdade(){
            this.idade++;

        }
    }
}

const pessoas =  criaPessoa('Lucas', 'Otavio', 25); //argumentos que vão ser passado para os parametros
const pessoas2 =  criaPessoa('Ana', 'Maria', 20);
const pessoas3 =  criaPessoa('Marta', 'Santos', 32);

console.log(pessoas.nome);
console.log(pessoas2.nome);
console.log(pessoas3.nome);

pessoas.fala();
pessoas.incrementaIdade();
pessoas.fala();