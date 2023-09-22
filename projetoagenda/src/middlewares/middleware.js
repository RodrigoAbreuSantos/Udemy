exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');//em todas as paginas vamos ter disponivel esta local.errors. Ele esta capturando as mensagens de erro
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404');//qualquer erro que ocorrer na aplicação não vamos passar para frente e vai renderizar uma pagina 404 pro cliente
  }

  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequired = (req, res, next) => {
  if(!req.session.user) { //usuario não esta logado
    req.flash('errors', 'Você precisa fazer login.');
    req.session.save(() => res.redirect('/'));//esta salvando a sessão antes de redirecionar a pagina
    return;
  }

  next();
};
