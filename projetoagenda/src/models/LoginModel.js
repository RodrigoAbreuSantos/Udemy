const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs'); //pacote para criptografar senha

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true }, //campo do nosso Model
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body; //vamos ter o body disponivel em todos os metodos da classe
    this.errors = [];//se tiver algum erro não pode cadastrar o usuario na base de dados
    this.user = null;
  }

  async login() {
    this.valida();
    if(this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email }); // se o usuario existir ele vai ser configurado para essa variavel aqui

    if(!this.user) {
      this.errors.push('Usuário não existe.');
      return;
    }

    if(!bcryptjs.compareSync(this.body.password, this.user.password)) {//vc vai comparar a senha que vc ta enviando com o segundo parametro que é o que ta na base de dados
      this.errors.push('Senha inválida');
      this.user = null; //estamos garantindo que o user vai ser sempre null
      return;
    }
  }

  async register() {//vai ser chamado no controller e esse mtedo chama outro metodo que é o valida
    this.valida();//o valida esta vendo os dados puros do formulario e esta fazendo uma checagem muito importante
    if(this.errors.length > 0) return; //ele não quer que passe dessa linha caso ocorra um erro com os dados puros do formulario.

    //Se passar ele vai fazer outra checagem com o email do form e vai ver se i user ja existe, se sim vai checar dnv se existe algum erro, porque vc ta mandando um erro para la que o usario ja existe

    await this.userExists(); //esta chamando o metodo que vai ver se o usuario existe

    if(this.errors.length > 0) return; //depois que passou da primeira checagem esta fazendo a segunda, pois o metodo userExists esta sendo codado depois da primeira checagem

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt); //assim que passar por toda a validação, vamos mandar para o banco de dados a senha criptografada

    this.user = await LoginModel.create(this.body);//esta falando pra criar no banco de dados o que tiver no objeto body, e o objeto body tem email e password. Mas é uma função assincrona, porque o LoginModel retorna uma promesa. O user esta recebendo uma promesa resolvida com email e senha
  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email }); //aqui ele esta encontando um registro na base de dados que tenha a chave email e o email que esta sendo enviado, isso aqui vai retornar ou usuario ou null
    if(this.user) this.errors.push('Usuário já existe.');//se o usuario ja foi prenchido vai adicionar no array erro o usuario ja existe
  }

  valida() {//esse metodo é chamado em outro metodo, e ele chama o metodo cleanUp que vai limpar nosso objeto
    this.cleanUp();

    // Validação
    // O e-mail precisa ser válido
    if(!validator.isEmail(this.body.email)) {//vai checar se não é um email valido 
      this.errors.push('E-mail inválido');
    }//esta colocando dentro do array de erro uma mensagem que fala que o email é invalido

    // A senha precisa ter entre 3 e 50
    if(this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    }
  }

  cleanUp() {//vai fazer um for na chave do seu body e vai garantir que tudo que esta dentro do seu body é uma string
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        this.body[key] = ''; //se qualquer campo do body não for string ele vai ter nada
      }
    }
    //com esse for limpou o objeto e pode confiar que ele ta limpo e so tenha email e password

    this.body = {//esta garantindo que seu objeto vai ter somente os campos que vc quer
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;

//queremos receber o que foi postado no export.register 