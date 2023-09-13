//POLIMORFISMO => FAZER UM METODO SE COMPORTAR DE FORMA DIFERENTES EM CLASSES FILHAS DO MESMO PAI

//Classe = Função Construtora

//SuperClasses
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

};

Conta.prototype.sacar = function(valor){
    if (valor > this.saldo){
        console.log('Saldo Insuficiente')
        this.verSaldo();
        return;
    }
    this.saldo = this.saldo - valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo = this.saldo + valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag./c: ${this.agencia}/${this.conta} Saldo: ${this.saldo.toFixed(2)} Limite: ${this.limite}`);
}

const conta1 = new Conta(11,22,10);
conta1.depositar(11);
console.log();

//CLASSE FILHA DE CONTA
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){ //POLIMORFISMO
    if (valor > this.saldo + this.limite){
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        return;
    }
}

const contaCC = new ContaCorrente(11, 22, 20, 10);
contaCC.depositar(10);
contaCC.sacar(110);
contaCC.sacar(1);
console.log();

//CLASSE FILHA DE CONTA
function ContaPoupanca(agencia, conta, saldo,){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaP = new ContaPoupanca(12, 33, 0);
contaP.depositar(10);
contaP.sacar(110);
contaP.sacar(1);


