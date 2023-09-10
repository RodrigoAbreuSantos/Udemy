const pessoa = new Object();
pessoa.nome = 'Luiz'
pessoa.sobrenome = 'Otavio'
pessoa.falarNome = function(){
    console.log(`${this.nome} esta falando seu nome`);
}

pessoa.falarNome();