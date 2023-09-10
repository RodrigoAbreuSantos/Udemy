// tanto as funções construtoras, quanto as funções fabricas, elas criam novos objetos. A função fabrica é uma função normal, e ela retorna um objeto, a gente faz ela retornar um objeto voluntariamente. Já a função construtora ela faz muita coisa automaticamente, ela ja cria o objeto e ja retorna o objeto, a unica coisa que vc precisa fazer é criar ela

//função fabrica -> fabrica objetos
//função construtora -> constroe objetos
// Na função construtora precisa sempre iniciar seu nome com letra maiscula
// Construtora -> Pessoa (new). Sempre quando a gente for criar pessoa por exemplo, colocamos a variavel = new Pessoa. Elas são un molde para gerar novos objetos

function Pessoa(nome, sobrenome){ // vc quer criar uma pessoa que tem nome e sobrenome. Como é uma função construtora vc ja sabe que o corpo dessa função vai ser o objeto que vai ser criado o java script ja faz isso automaticamente
    // Atributos ou métodos privados
    const Id = 123456;// vc pode criar algo privado para o obejto que so vai estar disponivel aqui 
    const metodoInterno = () => { // é muito util quando vc quer fazer algo interno, como validar cpf ou qualquer coisa
    }

    // Atributos ou metodos publicos. Porque vc pode acessar fora da função usando anotação de .
    this.nome = nome;//então aqui vc pode chamar a pessoa que esta sendo criada usando o this. Vc esta criando uma chave no seu objeto. É como se fosse Pessoa.nome = nome
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(`${this.nome} sou um metodo`);
    };
} //essa função é como se fosse um molde. E para criar novos objetos vindo desse molde Pessoa vc precisa usar a palavra new

const p1 = new Pessoa('Luiz', 'Otavio'); // a palavra new cria um novo objeto vazio, ela faz o this ou seja ela faz a pessoa apontar para o objeto que esta sendo utilizado e retorna o objeto para a variavel. Então não precisa falar return
const p2 = new Pessoa('Maria', 'Joaquina'); // a palvar new fez o this apontar para a pessoa que chamou

console.log(p1.nome);
p1.metodo();
p2.metodo();