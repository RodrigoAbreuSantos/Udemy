const _velocidade = Symbol('velocidade'); //ELE TA CRIANDO A CHAVE VELOCIDADE. QUE NÃO DA PARA SER ACESSADA FORA DO OBJETO

//CADA VEZ QUE VC CHAMAR ESSE SYMBOL ELE VAI GERAR UM ID ALEATORIO. UM SYMBOL NUNCA VAI SER IGUAL AO OUTRO

//PRIVATE ==> É UMA PROPRIEDADE DA CLASSE PRIVADA QUE NINGUEM PODE ACESSAR, NINGUEM PODE ALTERAR, E SO NA CLASSE VC PODE ALTERAR ELA. 

class Carro{ 
    constructor(nome){ 
        this.nome = nome; 
        this[_velocidade] = 0; 
    }

    set velocidade(valor){
        console.log('Setter');
        if (typeof valor !== 'number'){
            return; // não vai permitir que passe daqui
        }
        if (valor >= 100 || valor <= 0){
            return;
        }
        
        this[_velocidade] = valor; // vai fazer a _velocidade receber o valor do parametro
    }

    get velocidade(){ //aqui ele vai retornar a _velocidade
        console.log('Getter');
        return this[_velocidade]
    }

    acelerar(){ 
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){ 
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;  
    }
}

const c1 = new Carro('Fusca'); 

for (let i = 0; i <= 200; i++){ 
    c1.acelerar();
}

c1.velocidade = 2000; //Uma pessoa ta tendando alterar a velocidade, mas não vai conseguir, pois esta privada. AQUI É O SETTER
console.log(c1.velocidade);//O GETTER É QUANDO VC PEDE O VALOR DA VELOCIDADE, QUNADO VC FAZ ISSO VC TA ACESSANDO O GETTER

