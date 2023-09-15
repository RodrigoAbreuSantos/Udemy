// VC PODE FAZER QUANTAS VEZES QUISER O EXTENDS, QUANTO MAIS EXTENDS VC FAZ, MAIS HERANÇA VC TEM NA CADEIA 

// A HERANÇA VEM DE CIMA PARA BAIXO, VC HERDA TUDO DOS SEUS PAIS, MAS SEUS PAIS NÃO HERDAM NADA DE VC 

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado){
            console.log(`${this.nome} ja ligado`)
            return; 
        }
        this.ligado = true 
    }

    desligar(){
        if (!this.ligado){
            console.log(`${this.nome} já desligado`)
            return;
        } 
        this.ligado = false; 
    }
}

class Smartphone extends DispositivoEletronico{//Ele ta dizendo que a classe Smartphone vai herdar as coisas da classe DispositivoEletronico
    constructor(nome, cor, modelo){
        super(nome); //É A CLASSE PAI, OU SEJA É O DISPOSITIVOELETRONICO. ENTÃO TUDO QUE VC FEZ EM DISPOSITIVOELETRONICO ESTA SENDO REFEITO EM SMARTPHONE.

        //O SUPER É BASICAMENTE VC CHAMAR O CONSTRUCTOR DA CLASSE PAI E EXECUTAR ELE AQUI DENTRO, PARA QUE ELE EXECUTE TODO O CODIGO QUE TINHA PEDIDO ANTERIORMENTE

        this.cor = cor; //Alem dos parametros de DispositivoEletronico, essa classe vai ter seus proprios parametros
        this.modelo = modelo;
    }
}

const smart1 = new Smartphone('Smartphone', 'Preto', 'Galaxi S10');
console.log(smart1);



class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)//Ta pegando da classe pai os parametros 
        this.temWifi = temWifi;
    }

    ligar(){ //SE ELE NÃO ENCONTRASSE ESSE METODO LIGAR AQUI, ELE IRIA NO METODO LIGAR DA CLASSE PAI
        console.log('Olha, vc alterou o metodo ligar');
    }

    falaOi(){ //aqui ele criou um metodo so para essa classe, no metodo anterior ele sobreescreveu o metodo ligar
        console.log('Oi')
    }
}

const tab1 = new Tablet('iPad', true);
console.log(tab1);
tab1.desligar() // É UM METODO DA CLASSE PAI QUE PODE SER EXECUTADO AQUI. PRIMEIRO ELE BUSCA NESSA CLASSE, SE NÃO ACHAR ELE BUSCA NA CLASSE PAI
console.log(tab1)
tab1.falaOi();