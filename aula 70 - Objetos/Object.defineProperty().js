//defineProperty ==> apenas para uma chave do objeto

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // vc ta falando que vc quer que ele seja exibido. O enumerable mostra a chave
        value: estoque, // o value é o valor da chave
        writable: false,// define se vc pode ou não alterar o valor dessa propriedade. Aqui ele quis dizer que o valor não pode ser alterado
        configurable: true// Se vc colocar configurable como true vc ta falando que ela é confuguravel
    });
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: false// Se vc tivesse colocado false vc não conseguiria criar outro Object.defineProperty, porque vc estaria falando que essa propriedade não é consfiguravel
    });

    // Queremos definir a propriedade do estoque, estao passa o objeto que é o this e a propriedade que vc quer definir no caso é o estoque, depois vc tem que enviar um properry descriptor, que é um objecto e ele pode receber varias coisas
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1)); // É um array com as chaves do objeto

for (let chave in p1){
    console.log(chave)
}
