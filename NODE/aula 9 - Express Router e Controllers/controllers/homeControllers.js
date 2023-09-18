exports.paginaInicial = (req, res) => { //uma função que recebe a requisição do usuario e a resposta do servidor
    res.send('                                                                                              <form action="/" method="POST"> NOME: <input type="text" name="qualquercoisa">                         NOME2: <input type="text" name="seila">                                                       <button>Enviar</button> </form>')
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST');
}