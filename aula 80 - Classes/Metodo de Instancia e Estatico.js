//Os metodos estaticos são metodos que vc pode acessar na classe sem instanciar a classe, sem utilizar a palavra new. Eles tambem não vão estar disponiveis dentro da instancia, são basicamente funções que estão dentro da sua classe

//OS METODOS ESTATICOS SÃO METODOS QUE SÃO REFERENTES APENAS A CLASSE, E NÃO A INSTANCIA DA CLASSE

//OS METODOS DE INSTANCIA SÃO REFERENTES A INSTANCIA EM SIM, E ELE TEM ACESSO AOS DADOS DA INSTANCIA.

//QUANDO VC NÃO USA A PALAVRA NEW, O CONSTRUCTOR NÃO É CHAMADO

// ENTÃO O METODO ESTATICO É BASICAMENTE UMA FUNÇÃO QUE ESTA DENTRO DE UMA CLASSE, MAS VC PODERIA CRIAR UMA FUNÇÃO ISOLADA E CHAMAR ELA NA CLASSE


// DICA ==> CRIA UM METODO ESTATICO AO INVES DE USAR UMA FUNÇÃO EXTERNA, QUANDO VC FOR FAZER POR EXEMPLO UM CLASSE.METODO. EX: CONTROLEREMOTO.SOMA()

function soma2(x, y){
    console.log(x+y);
}

function teste(){
    console.log('Esse é meu teste');
}

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //METODO DE INSTANCIA ==> Metodo que a gente chama a instancia da classe.metodo
    aumentarVolume(){
        this.volume += 2;
    }

    //METODO DE INSTANCIA
    diminuirVolume(){
        this.volume -= 2;
    }

    //METODO ESTATICO
    static trocaPilha(){
        console.log('Ok, vou trocar')
    }

    static soma(x, y){ // O this do metodo estatico é a classe e não a instancia, até porque é a classe que esta chamando
        console.log(x+y);
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

//se vc tentar acessar um metodo estatico pela instancia da classe vai dar erro, porque vc só consegue acessar ele pela classe

ControleRemoto.trocaPilha(); //NESSE CASO NÃO ESTAMOS INSTANCIANDO A CLASSE, ENTÃO NÃO TEMOS ACESSO AOS DADOS DA CLASSE EM SI

ControleRemoto.soma(2, 5);

ControleRemoto.soma(2, 8);



// Math.random() ==> Math é uma classe que esta chamando um objeto estatico random