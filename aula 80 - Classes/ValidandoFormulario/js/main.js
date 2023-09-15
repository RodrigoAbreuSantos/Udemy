class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.eventos(); //vai executar ja de cara, na hora que carregar a classe
    }

    eventos(){ //metodos so de eventos
        this.formulario.addEventListener('submit', evento =>{ // função de callback, para não perder o this dentro da classe caso a gente precise. Nesse caso o this vai ser a propria instancia = valida

            this.handleSubmit(evento); //quando for clicado o submit vai ser chamado essa função


        });
    }

    handleSubmit(event){//quando for clicado o submit vai fazer que o form não seja enviado
        event.preventDefault(); //vai fazer que o parametro que é o evento do formulario, não seja enviado
        const camposValidos = this.camposSaoValidos(); // vai receber a função campos validos
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas){ // se nossas funções retornarem true a flag valid, vamos enviar o formulario
            this.formulario.submit(); //executamos o submit do formulario e ele é enviado, então quem ta controlando o submit do formualrio somos nos

        }
    }

    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos e repetir senhas precisam ser iguais');
            this.criaErro(repetirSenha, 'Campos e repetir senhas precisam ser iguais');
        }

        if (senha.length < 6 || senha.length > 12){
            valid = false;
            this.criaErro(senha, 'Precisa ter entre 6 e 12 caracteres');
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true //ta assumindo que os campos são true se acontecer algo diferente vai ser false. ISSO QUE VAI DEFINIR SE OS CAMPOS PODEM OU NÃO PODEM SER ENVIADOS
        for (let errorText of this.formulario.querySelectorAll('.error-text')){ // vai pegar cada valor da div error-text e remover. Assim evitando que toda vez que clique no botao de enviar apareca a mensagem de erro
            errorText.remove(); //vai remover cada valor da div error-text
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){ // vai pegar cada tag input do form
            const label = campo.previousElementSibling.innerText; // vai pegar o elemento anterior irmão do campo input que no caso vai ser a label encima do input
            if (!campo.value){ //uma string vazia retorna falsa, então diferente da campo.value se for uma string fazia vai validar como falso
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`); // se o campo tiver em branco vai chamar a função criaErro 
                valid = false; //esta mudando a flag de true para false
            } 

            if (campo.classList.contains('cpf')){ // ta vendo se na em alguma class contem cpf
                if (!this.validaCPF(campo)){//se não for validaCPF  vai fazer o valid receber false
                    valid = false // vc ta setando a flag, para no final do formulario enviar a flag final. Se vc desse um return o form ia parar aqui, então por isso não tem return
                }
            }

            if (campo.classList.contains('usuario')){ // ta pegando o campo que contem a class usuario
                if(!this.validaUsuario(campo)){//se não for a função que ta sendo chamada vai setar a flag para false
                    valid = false
                }
            }

        }

        return valid // se ele passar por tudo e não tiver nenhum erro vai retornar a flag valid como true
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou numeros')
            valid = false
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value); // ta criando uma instancia da classe ValidaCPF e ta passando como parametro o valor do campo

        if(!cpf.valida()){ // se o valid no ValidCPF for false vai fazer chamar a função criaErro que vai receber o campo e passar a mensagem
            this.criaErro(campo, 'CPF Invalido');
            return false
        }
        return true
    }

    criaErro(campo, msg){
        const div = document.createElement('div'); //vai criar uma div que vai mostrar a mensagem de erro
        div.innerHTML = msg; //vai fazer com que a div criada receba a mensagem de erro
        div.classList.add('error-text'); // vai fazer com que a variavel div que é uma div que foi criada receba a classe error-text;
        campo.insertAdjacentElement('afterend', div); // onde vc quer adicionar esse elemento, e vai ser depois do campo ele vai ser inserir a div com erro
    }

}

const valida = new ValidaFormulario();