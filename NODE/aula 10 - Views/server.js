const express = require('express');
const app = express();
const route = require('./router');
const path = require('path')

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views')) //esta estabelecendo views, esta pegando o caminho absoluto usando o path, dentro do path vai pegar o arquivo que esta dentro de ./src/views
app.set('view engine', 'ejs'); //para renderizar os views, tem certas coisas que precisamos fazer dentro do template, fazer um if, fazer um for , isso dentro do proprio html

app.use(route); 

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
})