const express = require('express');
const route = express.Router(); 
const homeController = require('./src/controllers/homeControllers'); 
const contatoController = require('./src/controllers/contatoController');


//ROTAS DA HOME
route.get('/', meuMiddleware, homeController.paginaInicial); //o get achou a rota que eu tava procurando, passou pelo meuMiddleware e depois ele chamou a requisição com o homeController.paginaInicial, mas para isso no meuMiddleware foi preciso chamar o next

route.post('/', homeController.trataPost);

//ROTAS DE CONTATO
route.get('/contato', contatoController.paginaInicial)

module.exports = route;

//antes de ele responder o cliente com homeController.paginaInicial ele vai colocar uma função para fazer alguma coisa qualquer




















/*
const express = require('express');
const route = express.Router(); 
const homeController = require('./src/controllers/homeControllers'); 
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next){ //se vc não colocar next ele não vai chamar o terceiro parametro que é homeController.paginaInicial ou outro e assim a requisição não vai terminar
    req.session = {nome: 'Luiz', sobrenome: 'Miranda'};
    console.log()
    console.log('Passei no seu middleware')
    console.log()
    next() //com isso ele vai pro proximo parametro 
}

//ROTAS DA HOME
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
    console.log()
    console.log('Ainda Estou aqui');
    console.log(`'ultimo middleware' Olha o que tem na req.session.nome ${req.session.nome}`)
}); //o get achou a rota que eu tava procurando, passou pelo meuMiddleware e depois ele chamou a requisição com o homeController.paginaInicial, mas para isso no meuMiddleware foi preciso chamar o next

route.post('/', homeController.trataPost);

//ROTAS DE CONTATO
route.get('/contato', contatoController.paginaInicial)

module.exports = route;

//antes de ele responder o cliente com homeController.paginaInicial ele vai colocar uma função para fazer alguma coisa qualquer

*/