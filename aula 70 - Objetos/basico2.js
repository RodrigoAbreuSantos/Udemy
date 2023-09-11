const pessoa = new Object();
pessoa.nome = 'Luiz'
pessoa.sobrenome = 'Otavio'
pessoa.idade = 30;
pessoa.falarNome = function(){
    return `${this.nome} esta falando seu nome`;
}
pessoa.getDataNascimento = function(){
    const dataAtual = new Date(); //esta usando o construtor da data para pegar uma nova data
    return dataAtual.getFullYear() - this.idade;
}
pessoa.falarNome();

console.log(pessoa.getDataNascimento());

for (let chave in pessoa){
    console.log();
}

// QUANDO FUNCTIONS ESTAO DENTRO DE OBJETOS NOS CHAMAMOS ESTAS FUNCTIONS DE METODOS
