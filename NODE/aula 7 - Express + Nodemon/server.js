const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello World'); 
}); 


app.get('/contato', (req, res) => {
    res.send('                                                                                              <form action="/" method="POST"> NOME: <input type="text" name="">                              <button>Enviar</button> </form>') 
}) 

app.post('/', (req, res) => { 
    res.send('recebi o formulario');
});

app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000') 
}); 
 