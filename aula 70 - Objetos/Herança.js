//Produto -> aumento, desconto
//Camisa = azul, caneca = material

function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); // fazendo isso vc linkou as 2 funções. A função Camiseta vai funcionar exatamente igual a Produtos. O this é o Produto e o resto são os argumentos
    this.cor = cor;
}
//Antes de vc fazer isso vc tinha um Camiseta.prototype.constructor = Camiseta, depois vc falou que o prototype de Camiseta era o prototype de Produto
Camiseta.prototype = Object.create(Produto.prototype)//Ele vai criar um objeto vazio e vai setar o prototype desse objeto vazio para o prototype do produto. Assim ele ta fazendo com que o prototype de Camiseta seja o mesmo que o de Produto, mas sem eles alterarem um ao outro
Camiseta.prototype.constructor = Camiseta; // fazendo isso vc faz com que no __proto__: Produto de Camiseta vc tenha a function constructor Camiseta(nome, preco, cor) e não a function constructor Produto.


//Vc tambem consegue sobreescrever um metodo que foi trazido como herança
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
}//AQUI MUDAMOS O COMPORTAMENTO DO METODO AUMENTO DENTRO DO PROTOTYPE DA CAMISETA 

//CAMISETA HERDA TUDO QUE PRODUTO TEM, MAS CAMISETA TAMBEM PODE TER SUAS COISAS


const camiseta = new Camiseta('Regata', 7.5, 'preta');
camiseta.aumento(10);
console.log(camiseta);



//OBS ==> PROTOTYPE É UM OBJETO

//O __proto__ de Produto é Produto.prototype e o __proto de Produto.prototype é Object.prototype


//EXPLICANDO:

/*
A ENGINE DO JAVA SCRIPT VAI PROCURAR DENTRO PRIMEIRO DENTRO DO OBJETO, SE NÃO TIVER DENTRO DO OBJETO ELA PROCURA DENTRO DO __PROTO__. EXISTE DENTRO DO __PROTO__ SE NÃO EXISTIR ELA CONTINUA PROCURANDO ATE ACABAR OS __PROTO__ E CHEGAR NO OBJECT.PROTOTYPE
*/