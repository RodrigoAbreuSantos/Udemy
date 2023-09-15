class Carro{ // Criou uma classe carro para simular um jogo de carro
    constructor(nome){ //colocou o parametro dentro do constructor
        this.nome = nome; //chave de um objeto que vai ser criado, com base no parametro
        this.velocidade = 0; //chave de um objeto que vai ser criado, o valor dessa chave vai mudar dependendo do metodo
    }

    acelerar(){ // metodo acelerar se o usuario clicar em acelar a velocidade aumenta até 100km/h
        if(this.velocidade >= 100) return;
        this.velocidade++;
    }

    freiar(){ // metodo freiar se o usuario clicar em acelar a velocidade diminui até 0km/h
        if (this.velocidade <= 0) return;
        this.velocidade--;  
    }
}

const c1 = new Carro('Fusca'); // instancia de Carro que foi criada para o jogo

for (let i = 0; i <= 200; i++){ // no for vai até 200, mas o permitido no acelerar é 100km/h
    c1.acelerar();
}

console.log(c1) // vai mostrar a instancia c1 da classe Carro com o nome e a velocidade