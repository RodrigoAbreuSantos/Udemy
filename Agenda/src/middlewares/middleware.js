exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors'); //em todas as paginas vamos ter disponivel esta local.errors. Ele esta capturando as mensagens de erro
  req.local.success = req.flash('success');
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404'); //qualquer erro que ocorrer na aplicação não vamos passar para frente e vai renderizar uma pagina 404 pro cliente
  }
  next(); //passando pro proximo
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
