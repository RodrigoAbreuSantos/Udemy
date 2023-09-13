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
    Produto.call(this, nome, preco); 
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta; 



Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
}

const camiseta = new Camiseta('Regata', 7.5, 'preta');
camiseta.aumento(10);
console.log(camiseta);

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco); //Herança ==> estamos herdando da function Produto os argumentos
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false, // não vai poder apagar e nem sobreescrever os gets e sets
        get: function(){
            return estoque;
        }, 
        set: function(valor){
            if (typeof valor !== 'number'){
                throw TypeError;
            }
            estoque = valor;
        },
    });
};

Caneca.prototype = Object.create(Produto.prototype); // estamos linkando os prototypes
Caneca.prototype.constructor = Caneca; //Estamos defifindo que o constructor dentro do  __proto__ dentro de Caneca vai ser Caneca e não Produto


const caneca = new Caneca('Caneca', 10, 'porcelana', 5);
console.log(caneca);

caneca.estoque = 10; //aqui vc esta usando o setter

console.log(caneca.estoque); // aqui vc esta usando o getter