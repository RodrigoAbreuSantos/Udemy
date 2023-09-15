class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado){
            console.log(`${this.nome} ja ligado`)
            return; // retorna nada se tiver desligado
        }
        this.ligado = true //se tiver desligado vai ligar
    }

    desligar(){
        if (!this.ligado){ // retorna nada se tiver ligado
            console.log(`${this.nome} já desligado`)
            return;
        } //SE PASSAR DO IF QUER DIZER QUE O DISPOSITIVO ESTA LIGADO, ENTÃO ELE DESLIGA NA LINHA DE BAIXO
        this.ligado = false; // se tiver ligado vai desligar
    }
}

const disp1 = new DispositivoEletronico('Iphone');
console.log(disp1);
disp1.ligar();
console.log(disp1);
disp1.desligar();
console.log(disp1);
disp1.desligar();