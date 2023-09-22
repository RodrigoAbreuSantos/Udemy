const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos(); //na rota que esta esse index estamos mostrando os contatos que estão no banco de dados 
  res.render('index', { contatos: contatos }); //aquie estamos renderizando para a tela index a chave contatos com a variavel contato que esta pegando os contatos que estão no banco de dados. Assim estamos injetando esses contados dentro do index
};

