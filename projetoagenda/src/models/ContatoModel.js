const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' }, //se não for enviado salva como uma string fazia
  email: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  criadoEm: { type: Date, default: Date.now }, //a hora que for cadastrado vai ser salva aquela data
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

Contato.prototype.register = async function() {
  this.valida();
  if(this.errors.length > 0) return;
  //se passar do return quer dizer que não tem erro então podemos criar na base de dados o objeto que tiver dentro do body
  this.contato = await ContatoModel.create(this.body);//esse contato quando ele for salvo ele vai ser retornado para ca
};

Contato.prototype.valida = function() {
  this.cleanUp();

  // Validação
  // O e-mail precisa ser válido
  //se o email for enviado e tiver algum valor no email vc valida, senão passa pro proximo
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.'); //se não tiver o valor na chave nome vai colocar uma mensagem de erro dentro do array de erro
  if(!this.body.email && !this.body.telefone) {
    this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
  }
};

Contato.prototype.cleanUp = function() {
  for(const key in this.body) {
    if(typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    email: this.body.email,
    telefone: this.body.telefone,
  };
};

Contato.prototype.edit = async function(id) {
  if(typeof id !== 'string') return;
  this.valida();
  if(this.errors.length > 0) return;
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });//se chegar até aqui quer dizer que vc pode editar seu contato, esse metodo esta falando para encontrar o contato por id e atualizar seus dados. Então estamos mandando o this.body que é o objeto que contem nome, sobrenome, email e telefone, o new quer dizer que quando vc atualizar esses contatos vc retorna os dados atualizados. Se for atualizado com sucesso vamos jogar os dados do novo contato em this.contato
};

// Métodos estáticos ==> são aqueles que não vão para o prototype, então eles não tem acesso a palavra this
Contato.buscaPorId = async function(id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findById(id); //ou retorna um contato ou retorna null
  return contato;//estamos retornado o contato com o id encontardo, para no contatoController podermos usar essa função
};

Contato.buscaContatos = async function() {
  const contatos = await ContatoModel.find()
    .sort({ criadoEm: -1 }); //quer que o contato esteja ordenado pela ordem que foi criado de maneira decrescente, então esta pegando o objeto criadoEm que é la do banco de dados e colocando em ordem decrescente 
  return contatos;
};

Contato.delete = async function(id) {
  if(typeof id !== 'string') return;
  const contato = await ContatoModel.findOneAndDelete({_id: id}); //a variavel contato vai receber o banco de dados que esta encontrando e deletando um id que esta no banco de dados que é o mesmo do parametro que estamos recebendo la do req.params.id
  return contato;
};


module.exports = Contato;
