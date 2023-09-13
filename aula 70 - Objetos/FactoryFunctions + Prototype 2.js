const fala = { // criando um objeto que tem um metodo dentro
    falar(){
        console.log(`${this.nome} esta falando`);
    },
}

const come = {
    comer(){
        console.log(`${this.nome} esta comendo`);
    },
}

const bebe = {
    beber(){
        console.log(`${this.nome} esta bebendo`);
    },
}

const pessoaPrototype = { ...fala, ...bebe, ...come }; // vc esta copiando os metodos para pessoa prototype.
//const pessoaPrototype = Object.assign({}, fala, come, bebe); // vc esta copiando os metodos para pessoa prototype.

//PESSOAPROTOTYPE ESTA FORA DA FUNÇÃO, ENTAO VC DESACLOPOU ELA PARA VC TER MAIS LIBERDADE

//AGORA VC PODE USAR ESSES METODOS ONDE VC QUISER E NAO SÓ EM PESSOA

function criaPessoa(nome, sobrenome){

    return Object.create(pessoaPrototype, {//aqui vc criando um objeto vazio que tem o prototype com os metodos e esta retornado o prototype
        nome: { value: nome }, // cada chave vai ter um objeto
        sobrenome: { value: sobrenome }
    });
};


const p1 = criaPessoa('Rodrigo', 'Abreu');

p1.falar()


//COMPOSIÇÃO => VC ESTA COMPONDO UM OBJETO COM VARIOS OUTROS OBJETOS. ESTÃO OS OBJETOS FALA, COME E BEBE QUE DENTRO TEM SEUS RESPECTIVOS METODOS ESTÃO SENDO JOGADOS PARA DENTRO DE UM NOVO OBJETO PESSOAPROTOTYPE

//MIXIN = PRECISAMOS DOS METODOS DENTRO DA PESSOA E NÃO É PORQUE ELE SERIA HERDADO POR UMA PESSOA