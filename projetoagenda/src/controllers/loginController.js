const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  if(req.session.user) return res.render('login-logado'); //se existe a sessão user, ou seja se o usuario estiver logado vai redirecionar ele para a pagina login-logado
  return res.render('login');//estamos renderizando para a pagina login que criaremos nos views
};

exports.register = async function(req, res) {//por ser um metodo async 
  try {
    const login = new Login(req.body);//vai ser uma instancia da classe Login
    //fazendo isso criamos um objeto que recebe o req.body
    await login.register();//esta chamando a função register

    if(login.errors.length > 0) {//se tiver erro vai mostrar uma mensagem auto destrutiva da tela
      req.flash('errors', login.errors);// esta pegando o que o usario requisitou e esta mostrando uma mensagem de erro na tela
      req.session.save(function() {
        return res.redirect('back');
      });//esta salvando a seção, para poder voltar para a pagina de login caso de algum erro. Esta criando uma função de calback para voltar para a pagina anterior se der algum erro então se vc envia os dados para a rota /login/register e tem algum erro, vai mostrar na tela uma mensagem auto destrutiva e vai voltar para a rota /login
      return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso.');// esta pegando o que o usario requisitou e esta mostrando uma mensagem de erro na tela
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {//se acontecer algum erro vai renderizar a pagina 404
    console.log(e);
    return res.render('404');
  }
};

exports.login = async function(req, res) {
  try {
    const login = new Login(req.body); //estamos usando nossa classe de Login
    await login.login(); // e chama o metodo login()

    if(login.errors.length > 0) {//se tiver erro vai aparecer as mensagens de erro
      req.flash('errors', login.errors);
      req.session.save(function() {//salva a sessão e retorna
        return res.redirect('back');
      });
      return;
    }

    req.flash('success', 'Você entrou no sistema.');//se não tiver erro vai aparecer uma mensagem de sucesso
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('back');
    });
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.logout = function(req, res) {
  req.session.destroy();//estamos matando a sessão
  res.redirect('/');//estamos redirecionado o usuario para a home do site
};



//sempre que vc fizer operações com bases de dados vc vai ter que trabalhar com promises, porque retorna uma promise