//classe em java script é a mesma coisa da função construtora

//A classe não precisa atrelar um metodo ao prototype, ela fas isso automaticamente para vc. Então se vc ser um conole na p1, vc vai ver que ela é da classe pessoa e dentro do seu prototype esta os metodos


class Pessoa { //
    constructor(nome, sobrenome){//para ficar identica a função construtora a classe tem o constructor, que pode receber os parametros. ESSE METODO É EXECUTADO SEMPRE QUE VC CRIA A CLASSE. ELE PODE NÃO EXISTIR SE VC NÃO PRECISAR DELE. MAS SE VC PRECISAR PASSAR PARAMETROS PARA SUA CLASSE VC VAI UTILIZAR ELE 
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){ // o metodo foi atrleado ao pai da Pessoa
        console.log(`${this.nome} esta falando`);
    }

    comer(){
        console.log(`${this.nome} esta comendo`);
    }

    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
}
//Instanciar ==> É CRIAR UM OBJETO A PARTIR DA CLASSE. A CLASSE É UM MOLDE ASSIM COMO A FUNÇÃO CONSTRUTORA. QUANDO VC INSTANCIA A CLASSE, VC ESTA CRIANDO UM OBJETO A PARTIR DA CLASSE

const p1 = new Pessoa('Luiz', 'Miranda'); //O THIS VAI APONTAR PARA CADA UMA DESSAS PESSOAS
const p2 = new Pessoa('Maria', 'Joaquina');
const p3 = new Pessoa('Ana', 'Carolina');
const p4 = new Pessoa('Leandro', 'Cuerbas');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
