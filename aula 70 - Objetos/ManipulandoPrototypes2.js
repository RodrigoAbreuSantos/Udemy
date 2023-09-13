function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};

const p1 = new Produto('Camiseta', 50);
console.log(p1);
//p1.desconto(100);
p1.aumento(100);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, p1);// fez o p2 passar pelo p1, e como o p1 passa pelo Object.prototype que tem os metodos de aumento e desconto. Então p2 tambem tera esses metodos, pois ele passa por p1 e p1 passa por Object.prototype. OU SEJA O PROTOTYPE DE P2 VAI SER O P1

p2.aumento(10);
console.log(p2);



const p3 = Object.create(Produto.prototype); // criou um objeto que tem como prototype o Produto, ou seja o lugar onde faz os metodos

p3.preco = 113; // criou uma chave com valor no objeto
p3.aumento(10);// pegou o metodo usando o prototype Produto
console.log(p3);


const p4 = Object.create(Produto.prototype, { //Aqui ele ja criou a chave no objeto p3, com as configurações
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
}); 

p4.aumento(10);
console.log(p4);
