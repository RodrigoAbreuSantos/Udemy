//todas as rotas que vc criar vão vir em route e todos os controles vão vir na pasta controllers

const express = require('express');
const route = express.Router(); //podemos utilizar isso aqui como rota
const homeController = require('./controllers/homeControllers'); // esta importando tudo que tem exports no homeController
const contatoController = require('./controllers/contatoController');

//ROTAS DA HOME
//o trabalho desse arquivo é so fazer o roteamento, então ele vai ver qual rota que é e vai chamar um controlador, e esse controlador vai decidir qual view e qual modo vamos utilizar
route.get('/', homeController.paginaInicial); // esta falando para usar como pagina inicial a variavel paginaInicial que recebe uma função la no homeController

route.post('/', homeController.trataPost);

//ROTAS DE CONTATO
route.get('/contato', contatoController.paginaInicial)

module.exports = route;


//Primeiro ele separou as rotas, então ele criou um arquivo chamado router e nesse arquivo ele buscou o express e criou uma variavel route que é o express.Router. E depois ele criou uma variavel chamad homeController que esta importando o arquivo homeController. O Router vai ser o responsavel por tratar as suas rotas, mas ele so manda pro lugar correto ou seja ele manda para o controller correto. Nesse caso ele criou um controller para a home em si. Tudo que for get, post qualquer coisa que for relacionada a home vai estar dentro do homeController.

//No homeController ele criou as funções que viriam dentro da rota, então ao inves de vc criar ela ali dentro vc jogou ela dentro de um arquivo só para isso e ao inves de executar a função usando o () vc só passa a referencia, a paginaInicial é uma função, mas vc esta apenas passando a referencia dela homeController.paginaInicial