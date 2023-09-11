//defineProperties ==> é para varias chaves do objeto

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: estoque, 
        writable: true,
        configurable: true
    });

    Object.defineProperties(this, { //aqui vc recebe o objeto e manda um {} => objeto
        nome: {
            enumerable: true, 
            value: nome, // o valor da chave nome vai ser o valor do parametro nome que esta recebendo
            writable: true,
            configurable: true
        }, //vc criou a chave nome onde o definiProperty pode estar ai dentro
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true,
            configurable: true
        }
    }) 
    
}