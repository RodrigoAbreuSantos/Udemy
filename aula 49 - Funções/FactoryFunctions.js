// funções fabricas, são funções que retornam um objeto
/*

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome: nome,
        sobrenome: sobrenome,
        fala(assunto){
            return `$ ${nome} esta falando ${assunto}. A altura é ${this.altura} e o peso é: ${this.peso}`; // o this sempre vai se referir a pessoa que chamou o que vc estiver executando. Nesse caso especifico estamos executando esse metodo fala nesse caso especifico esse metodo é uma função anonima. Quem pediu para o fala ser executado foi o p1 la no escopo global, Então o this faz referencia ao p1. Então o this.nome é a mesma coisa de falar p1.nome
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); 
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
console.log(p1.fala('falando sobre js')); // o p1.fala é porque é um metodo dentro de um objeto
console.log(p1.nome);
console.log(p1.imc());

const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
console.log(p2.fala('algo')); // agora o this vai ser p2. Então o this vai ser sempre quem chamar o objeto
console.log(p2.imc());

*/





function criaPessoa(nome, sobrenome, a, p){
    return {
        nome: nome,
        sobrenome: sobrenome,
        //Getter ==> vc quer apenas o valor
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //Setter ==> 
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift(); // o shift vai retornar o primeiro valor da variavel e vai tirar ele do array
            this.sobrenome = valor.join(' ')
            console.log(`Seu nome é ${this.nome} ${this.sobrenome}`);
        },
        fala(assunto){
            return `$ ${nome} esta falando ${assunto}. A altura é ${this.altura} e o peso é: ${this.peso}`; // o this sempre vai se referir a pessoa que chamou o que vc estiver executando. Nesse caso especifico estamos executando esse metodo fala nesse caso especifico esse metodo é uma função anonima. Quem pediu para o fala ser executado foi o p1 la no escopo global, Então o this faz referencia ao p1. Então o this.nome é a mesma coisa de falar p1.nome
        },
        altura: a,
        peso: p,
        //Getter => vc só quer obter o valor
        get imc(){ // isso vai fazer com que ele finja ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); 
        }
    };
}

const p1 = criaPessoa('Marcos', 'Alonso', 1.70, 70);
const p2 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
const p3 = criaPessoa('Ana', 'Carolina', 1.50, 40);
console.log(p1.imc);
console.log(p2.altura);
console.log(p3.fala('falando sobre js')); // o p1.fala é porque é um metodo dentro de um objeto
console.log(p3.nome);
p3.nomeCompleto = 'Maria Joaquina Silva'
