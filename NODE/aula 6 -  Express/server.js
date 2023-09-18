// EXPRESS ==> é um micro framework que vai te ajudar a trabalhar com a web, 

// http://meusite.com/      / é uma rota do seu site, só de acessar ela pelo navegador vc esta solicitando um get que te entrega a pagina. E o servidor estaria resposanvel por saber qual é a rota e falar essa é a pagina que eu quero te entregar e ai ele te entrega

//          CRIAR         LER          ATUALIZAR          APAGAR   

// CRUD --> CREATE        READ           UPADATE          DELETE

//          POST          GET            PUT              DELETE

//o post seria para criar alguma coisa, geralmente vc manda dados no corpo da requisição, o get seria para o servdor apenas entregar a pagina requisitada

// operações para fazer com uma api, então nosso servidor desse ser capaz de criar, editar, ler e apagar alguma coisa

const express = require('express'); //esta dentro da pasta node_modules, então não precisa de caminho 
const app = express(); // o express vai ajudar a gente a trabalhar nas rosta da aplicação

app.get('/', (req, res) => {//AQUI TEMOS UMA ROTA PARA TRATAR AS REQUISIÇÕES QUE CHEGAREM NO /
    res.send('Hello World'); // de acordo com a requisição o servidor esta entregando a resposta
}); //o primeiro parametro é a rota, o segundo parametro é uma função e essa função recebe 2 parametros, a requisição e a resposta. A requisição é o que estou pedindo, o usuario fez uma requisição get para a pagina tal, e a resposta é o que eu vou mandar para o servidor. OU SEJA O CLIENTE FAZ UMA REQUISIÇÃO E O SERVIDOR TEM O TRABALHO DE ENTREGAR A RESPOSTA DESSA REQUISIÇÃO


//vc precisa fazer o servidor ficar ouvindo em uma porta do computador, uma porta é referente a um processo

app.get('/contato', (req, res) => { //esta criando uma outra rota
    res.send('                                                                                              <form action="/" method="POST"> NOME: <input type="text" name="">                              <button>Enviar</button> </form>') //esta mandando uma resposta para o usuario
}) 

app.post('/', (req, res) => { // o post seria para criar alguma coisa, geralmente vc manda dados no corpo da requisição
    res.send('recebi o formulario');
});

app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000') // para ser exibido no console 
}); //ele quer que o servidor fique ouvindo a porta 3000, pois não é uma parte muito comum
 