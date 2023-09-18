class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}




const nome = 'Ana';
const sobrenome = 'Joaquina';
const idade = 20;

module.exports = {
    nome,
    sobrenome,
    idade,
    PessoaChave: Pessoa // esta exportando a chave pessoa com a classe Pessoa
}

/*
const nome = 'Luiz'
const sobrenome =  'Miranda'

const falaNome = () => {
    return nome + ' ' + sobrenome
}

// module.exports.nome = nome; //ele esta exportando a chave nome com o valor nome
// module.exports.sobrenomenome = sobrenomenome;

exports.nomE = nome; //ele esta exportando a chave nome com o valor nome
exports.sobrenomE = sobrenome;
exports.falaNome = falaNome;
this.idade = 20; //o this faz referencia ao exports

console.log(exports)
*/