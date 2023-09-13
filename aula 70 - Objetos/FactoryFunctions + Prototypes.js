function criaPessoa(nome, sobrenome){

    const pessoaPrototype = { // aqui vc esta criando um prototype de criaPessoa com os metodos
        falar(){
            console.log(`${this.nome} esta falando`);
        },
        comer(){
            console.log(`${this.nome} esta comendo`);
        },
        beber(){
            console.log(`${this.nome} esta bebendo`);
        },
    }

    return Object.create(pessoaPrototype, {//aqui vc criando um objeto vazio que tem o prototype com os metodos e esta retornado o prototype, mas o prototype esta vazio, então vc vai criar as chaves e definir suas propriedades
        nome: { value: nome }, // cada chave vai ter um objeto
        sobrenome: { value: sobrenome }
    })
}


const p1 = criaPessoa('Rodrigo', 'Abreu');

p1.falar()