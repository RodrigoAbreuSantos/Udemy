exports.paginaInicial = (req, res) => { 
    console.log('Respondendo cliente')
    res.render('index');
    return; //acabou a função aqui
}

exports.trataPost = (req, res) => {
    res.send(req.body); //é onde estamos recebendo a rota do post
}