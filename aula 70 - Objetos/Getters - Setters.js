//defineProperty ==> Getters e Setters
//GETTER ==> OBTER O VALOR
//SETTER ==> SETAR O VALOR, CONFIGURAR O VALOR
// Alem de fazer o seu metodo virar um atributo do objeto, eles são uma maneira de proteger sua propriedade

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        //value: estoque, // valor do parametro -> vc não vai precisar porque vc vai utilizar o get e o setter para trabalhar no valor, tanto para setar quanto para obter o valor
        ///writable: true, // pode alterar -> nõa faz sentido ter writable se vc vai ter um metodo que vai trabalhar no seu valor
        configurable: true, // consfiguravel
        get: function(){// vc esta fazendo uma função anonima para obter o valor e esta retornando o valor
            return estoquePrivado //estoque;
        },
        set: function(valor){ // esse valor como parametro é exatamente como se vc estivesse fazendo isso: p1.estoque = 'O valor que eu quero ';
            if (typeof valor !== "number"){
                throw new TypeError('APENAS NUMEROS');
            }
            estoquePrivado = valor; // esta variavel não sera mais alterada enquento vc não enviar um numero aqui, então se vc receber como valor uma string ele vai cair no if e não vai fazer com que o estoquePrivado QUE ESTA SENDO RETORNADO NO GET RECEBA O VALOR PASSADO

            

        } // vc pode tambem ter um setter para configurar o valor, então diferente do getter ele não vai te retornar nada, vai so modificar o valor ali dentro, e é no setter que vc vai validar esse valor
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500;
console.log(p1.estoque); 

//Getters e Setters são uma maneira de proteger sua propriedade. Então imagina que o seu produto vai receber um numero, mas se for passado uma string o seu programa quebra, então getters e setters estão ai para isso. Eles podem falar que esta invalido ou qualquer outra coisa

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}

const p2 = criaProduto('Calça');
console.log(p2.nome);
p2.nome = 'Qualquer coisa';
console.log(p2.nome);