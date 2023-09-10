function Calculadora(){
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.clickBotoes();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', evento => {
            if (evento.KeyCode === 13){
                this.realizaConta();
            }
        });
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if (!conta){
                alert('Conta Invalida');
                return;
            }

            this.display.value = conta;

        }catch(erro){
            alert('Conta Invalida');
            return;
        }
    };

    this.clearDisplay = () =>{
        this.display.value = '';
    };

    this.apagaUm = () =>{
        this.display.value = this.display.value.slice(0, -1);
    };

    this.clickBotoes = () => {
        document.addEventListener('click', evento => {
            const el = evento.target;

            if (el.classList.contains('btn-num')){
                this.addNumDisplay(el.innerText);
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
    }

    this.addNumDisplay = (valor) =>{
        this.display.value += valor;
        this.display.focus();
    }
}

const calculadora = new Calculadora(); // vc ta falando pro java script usar seu molde que é a função Calculadora, para criar um novo objeto de calculadora. então a variavel calculadora realmente é um objeto
calculadora.inicia();

/*
function Calculadora(){
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => this.clickBotoes();
    

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', evento => {
            if (evento.KeyCode === 13){
                this.realizaConta();
            }
        });
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if (!conta){
                alert('Conta Invalida');
                return;
            }

            this.display.value = conta;

        }catch(erro){
            alert('Conta Invalida');
        }
    };

    this.clearDisplay = () => this.display.value = '';


    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

    this.clickBotoes = () => {
        document.addEventListener('click', evento => {
            const el = evento.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);
            

            if (el.classList.contains('btn-clear')) this.clearDisplay(); //tudo que estiver no input vai ser limpo
            

            if (el.classList.contains('btn-del')) this.apagaUm();
            

            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.addNumDisplay = (valor) => this.display.value += valor;
    
}

const calculadora = new Calculadora(); // vc ta falando pro java script usar seu molde que é a função Calculadora, para criar um novo objeto de calculadora. então a variavel calculadora realmente é um objeto
calculadora.inicia();
*/