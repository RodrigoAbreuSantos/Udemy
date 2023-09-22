const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register); //vai receber o que o usuario mandou
route.post('/login/login', loginController.login);//esta criando a rora que vai receber o usuario logado
route.get('/login/logout', loginController.logout);//esta criando uma rota para sair 

// Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);//criando rota, o middleware é uma função antes de responder o usuario, esse middleware fa zcom que se o usuario não tiver logado não vai para a pagina seguinte e continua na mesma mostrando uma mensagem de que vc não esta logado
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);//criando a rota que vai ter os id dos contato
route.post('/contato/edit/:id', loginRequired, contatoController.edit);//estamos recebendo oq que foi enviado no contato/register e criado no banco de dados, mas essa rota é uma rota de dição da rota /contato/index/:id, então se quisermos editar essa rota index/:id temos que mudar de rota, então teoricamente é uma rota que recbe o que estava na rota /contato/index/:id
route.get('/contato/delete/:id', loginRequired, contatoController.delete); //estamos criando uma rota de deletar, como não estamos recebendo nada do usuario, utilzamos o get, pois o usario que vai fazer a ação e não nos que responderemos 

module.exports = route;
