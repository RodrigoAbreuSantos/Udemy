// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

//Instancia ==> vc esta criando uma instancia dessa função contrutora
const pessoa1 = new Pessoa('Luiz', 'Otavio'); // <-- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'Joaquina'); // new = Novo Objeto de Pessa

console.dir(pessoa1);
console.log(pessoa2);

