function criaCalculadora(){
    return {
        display: document.querySelector('.display'), // o display agora esta dentro de um atributo do seu objeto, estão se vc precisar do seu display agora vc tem que usar o this.display
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.clickBotoes();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', evento => {
                if (evento.KeyCode === 13){
                    this.realizaConta();
                }
            }); // então vai pegar o display que é o input na hora que vc pressionar o enter e soltar vai ir para o inicia e começa a fazer as contas
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta); // ele vai realizar a conta que esta pegando o display.value, usando o metodo eval

                if (!conta){ // se a conta não existir
                    alert('Conta Invalida');
                    return;
                }

                this.display.value = conta;
            }catch(erro){
                alert('Conta Invalida');
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1); // vai apagar um caracter. Pegando o tamnho da string, na ultima posição
        },

        clickBotoes(){
            // this -> Calculadora
            document.addEventListener('click', evento =>{ // isso ja é automatico do java script ele manda o evento aqui 
                const el = evento.target; // vai pegar o que vc esta clicando na pagina

                if (el.classList.contains('btn-num')){ // se o elemento contem essa classe 
                    this.btnParaDisplay(el.innerText); // isso é um metodo, mas como é um metodo que vai estar dentro de outro metodo vc precisa da palavra this. Quem esta chamando essa função não é a calculadora, mas o document.

                    //vc vai pegar do elemento que esta sendo clicado que é o botão, mas vc vai pegar o innerText

                    //Para resolver o this e falar que ele esta sendo chamado pela calculadora e não pelo document vc faz um bind fora da função. Assim vc ta falando para função anonima que ao inves de usar o this dela, usa o this da calculadora 
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay(); //tudo que estiver no input vai ser limpo
                }

                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }); 
        },

        btnParaDisplay(valor){
            this.display.value += valor; // vai pegar o input, mas com o valor e colocar dentro o parametro valor que la no clickBotoes é o texto do botao que esta sendo clicado
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); // vc ta falando calculadora passando o inicio, que pega o click botoes que dentro do clickbotes aciona um evento e pega o evento referente  a classe btn faz um this.ParaDisplay


// sempre que vc quiser referenciar uma chave do seu objeto dentro do objeto vc precisa da palavra this

//quando vc usa uma arrow function o seu this vai ser sempre o this antigo, não o novo. Então se usar uma arrow functions para o evento acionado o this não vai ser document, mas vai continuar sendo calculadora. Então se vc quiser que o this seja a nova coisa que esta chamando, vc usa funtions, caso contraio pode usar arrow function se vc quiser