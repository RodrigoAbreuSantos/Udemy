const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {//função para renderizar para a rota contato
  res.render('contato', {//esta renderizando a rota contato/index para o html contato
    contato: {}//estamos mandando um contato fake fingindo que tem um objeto
  });
};

//sempre que criamos uma função assincrona quer dizer que essa função tambem vai retornar uma promessa para cadeia dela
exports.register = async(req, res) => { //vai receber os dados, voltar para a base de dados e redirecionar para alguma pagina
  try {
    const contato = new Contato(req.body);
    await contato.register();

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors); //se tiver rro vai mostrar o array de erro que agora é um objeto de contato
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`)); //estamos salvando a sessão e redirecionando o usuario para a rota contato/index/:id e esse primeiro contato é a variavel que criamos aqui é uma instancia de Contato e o segundo contato é o que esta dentro de Contato e o id é o que esta dentro do segundo contato, pois la fizemos o contato receber a criação do banco de dados, então o _id esta dentro do contato e contato nessa pagina esta dentro da instancia contato, e essa instancia é uma instancia de Contato.
    //O this representa a instancia contato
    return;
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function(req, res) {
  if(!req.params.id) return res.render('404'); //se não for enviado o parametro id vai renderizar uma pagina 404

  const contato = await Contato.buscaPorId(req.params.id); //se tiver o contato vai renderizar a pagina, 
  if(!contato) return res.render('404'); //se o contato não existir vai para a pagina 404

  res.render('contato', { contato: contato });//ele vai renderizar contato, so que ele quer receber o contato para poder acessar os dados do contato dentro da pagina, Ele ta criando uma chave que vai receber a variavel contato que recebe o contato que foi feita a busca por id
};

exports.edit = async function(req, res) {
  try {
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);//estamos chamando a função edit la no Contato e o parametro para atualizar o contato é o id

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch(e) {
    console.log(e);
    res.render('404');
  }
};

exports.delete = async function(req, res) {
  if(!req.params.id) return res.render('404');

  const contato = await Contato.delete(req.params.id);//esta recebendo a função delete em Contato com o parametro que é o params do id que foi requerido pelo usuario
  if(!contato) return res.render('404');

  req.flash('success', 'Contato apagado com sucesso.');
  req.session.save(() => res.redirect('back')); //esta salvando a sessão e redirecionado para a pagina anterior, ou seja a pagina em que esta, que seria /contato/index
  return;
};
