exports.paginaInicial = (req, res) => { //uma função que recebe a requisição do usuario e a resposta do servidor
    res.render('index') //vamos mandar o nome do arquivo que queremos que renderize na tela
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST');
}