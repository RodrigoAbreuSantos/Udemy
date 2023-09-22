const mongoose = require('mongoose');
const validator = require('validator')

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true }, //campo do nosso Model
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);


class Login {
    constructor(body){
        this.body = body; //vamos ter o body disponivel em todos os metodos da classe
        this.errors = []; //se tiver algum erro não pode cadastrar o usuario na base de dados
        this.user = null;
    }

    async register(){//vai ser chamado no controller e esse mtedo chama outro metodo que é o valida
        this.valida()
        if (this.errors.length > 0){//se o array de erro for maior que zero quer dizer que teve algum erro
            return;
        }
        try{
            this.user = await LoginModel.create(this.body); //esta falando pra criar no banco de dados o que tiver no objeto body, e o objeto body tem email e password. Mas é uma função assincrona, porque o LoginModel retorna uma promesa. O user esta recebendo uma promesa resolvida com email e senha
        }catch(erro){
            console.log(erro);
        }

    }

    valida(){//esse metodo é chamado em outro metodo, e ele chama o metodo cleanUp que vai limpar nosso objeto
        this.cleanUp();

        if (!validator.isEmail(this.body.email)){ //vai checar se não é um email valido 
            this.errors.push('Email Invalido');//esta colocando dentro do array de erro uma mensagem que fala que o email é invalido
        }

        if (this.body.password.length < 3 || this.body.password.length > 50){
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
        }
    }

    cleanUp(){ //vai fazer um for na chave do seu body e vai garantir que tudo que esta dentro do seu body é uma string
        for (const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ''; //se qualquer campo do body não for string ele vai ter nada
            }
        }
        //com esse for limpou o objeto e pode confiar que ele ta limpo e so tenha email e password
        this.body = { //esta garantindo que seu objeto vai ter somente os campos que vc quer
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;

//queremos receber o que foi postado no export.register 