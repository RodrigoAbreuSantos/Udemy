function relogio(){
    function criarHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0; // variavel global que inicia do 0. Ela mantem seu estado então quando vc clica em iniciar ela atualiza, quando vc clica em pausar ela se mantem e quando vc clica em inicira dnv ela atualiza, então vc não declara ela novamenete essa variavel se mantem
    let time;
    
    function iniciarRelogio(){ // criou uma função para iniciar o relogio
        time = setInterval(function(){
            segundos++; // a cada 1000 milisegundos esta adicinado um segundo
            relogio.innerHTML = criarHoraDosSegundos(segundos); // dentro da div esta colocando a hora formatada no criaHoraDosSegundos passando como parametro o segundo com inicio 0
        }, 1000)
    }
    
    iniciar.addEventListener('click', function(evento){
        relogio.classList.remove('pausado'); // aqui ele esta falando que quando ele iniciar ele quer remover a classe pausado quando clicar no botao iniciar
        clearInterval(time) // independente se tem ou não um timer rodando vc vai dar um clear nele. Assim vc garante que vc não crie 2 times na mesma pagina. Entoa toda vez que vc clicar em iniciar ele zera o atual e começa de novo assim não criando 2 ou mais times para o seu relogio
        iniciarRelogio(); // esta chamado a função quando vc clica no botão iniciar
    });
    
    pausar.addEventListener('click', function(evento){
        relogio.classList.add('pausado'); // aqui ele quer adicionar a classe pausado quando ele clicar no botao pausar
        clearInterval(time);
    });
    
    zerar.addEventListener('click', function(evento){
        relogio.classList.remove('pausado');
        clearInterval(time);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        
    });
}

relogio();

/*
document.addEventListener('click', function(evento){
    const el = evento.target;

    if (el.classList.contains('zerar')){// se a variavel el que recebe o evento, target que fala o evento que esta sendo clicado. Se el como classe contem zerar então faça algo.
        relogio.classList.remove('pausado');
        clearInterval(time);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    if (el.classList.contains('pausar')){
        relogio.classList.add('pausado'); 
        clearInterval(time);
    }
    if (el.classList.contains('iniciar')){
        relogio.classList.remove('pausado'); 
        clearInterval(time) 
        iniciarRelogio(); 
    }
    
    console.log(evento.target); // vai falar qual elemento esta sendo clicado, se é uma section, div, p ou qualuer outra coisa
})
*/