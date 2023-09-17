/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
const nome = 'Luiz';
const sobrenome = 'Miranda'
const idade = 30

const cpf = 'aaasaa'//não vai ser exportada

//export default function soma(x, y){ // vc importa com o nome que vc quiser la porque aqui é default. So pode exportar uma coisa como default
    //return x + y
//}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default (x, y) => x*y;

//export { nome as default, sobrenome, idade}

// export { nome, sobrenome, idade, soma}; //aqui vc esta exportando a variavel nome e vc pode importar ela em outro aqruivo para vc utilizar