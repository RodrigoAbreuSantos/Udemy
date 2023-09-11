/* Java script é baseado em protótipos para passar propriedades e metodos de um objeto para outro

Definição de protótipo ==> Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem uma referencia interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro no proprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro

Todos os objetos tem uma referencia interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Pessoa.prototype === pessoa1.__proto__
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function(){ // vc tirou esse metodo dentro da função contrutora e colocou ele dentro do prototype, faznedo com que todos os novos objetos dessa função construtora tenham esse nomeCompleto()
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa('Luiz', 'Otavio'); 
const pessoa2 = new Pessoa('Maria', 'Joaquina'); 

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());

// prototype é um objeto que ja esta automaticamente atrelado a função construtora

