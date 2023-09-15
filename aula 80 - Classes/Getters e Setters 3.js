class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor){ // precisa receber um valor, porque é o valor que vem depois do sinal de atribuição o sinal de = 
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        //SETANDO NOME COMPLETO, AUTOMATICAMENTE SETA O NOME E SOBRENOME NA CLASSE PESSOA
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1.nomeCompleto);

p1.nomeCompleto = 'Luiz Miranda Oliveira'
console.log(p1.sobrenome);