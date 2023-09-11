// Constructor Function

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // nenhum valor do objeto deste molde vai ser alterado
}

// A palavra new cria um obejto vazio, depois vai pegar a palavra this aletrar ela dentro da função ao objeto. E no final da função vai ter um retun this que this agora representa o objeto
const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p2.nome);

//O THIS VAI VARIAR DE ACORDO COM QUEM TA CRIANDO ELE, ELE FAZ REFENCIA A QUEM ESTA CHAMANDO

//A CADA PESSOA QUE VC CRIAR TODAS ELAS VÃO VIR DO MESMO MOLDE

//USANDO CONST VC NÃO PODE ALTERAR O VALOR DA VARAIVEL. POR EXEMPLO CONST P1 = A. P1 = D, ISSO NÃO PODE.
//MAS VC PODE FALAR QUE P1 NAQUELE VALOR ALTERE A CHAVE DELE. ENTÃO QUANDO VC FAZ ISSO VC ALTERA O VALOR DENTRO DELE SEM TROCAR A REFERENCIA 

const p3 = new Pessoa('Maria', 'Joaquina');
Object.freeze(p3); //vc esta travando o objeto, falando que vc não quer alterar ele
p3.nome = 'Ana' //vc não vai mudar o nome, porque vc travou o objeto
console.log(p3);