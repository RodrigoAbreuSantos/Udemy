const express = require('express');
const app = express();
const route = require('./router');
const path = require('path')
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))) //esta colocando o caminho absoluto pegando o arquivo da pasta public, esta deixando estatico

app.set('views', path.resolve(__dirname, 'src', 'views')) 
app.set('view engine', 'ejs'); 

//nossos proprios middlewares
app.use(middlewareGlobal); //todas as requisições em todas as rotas vão passar dentro desse middleware aqui
app.use(outroMiddleware);
app.use(route); 

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
})