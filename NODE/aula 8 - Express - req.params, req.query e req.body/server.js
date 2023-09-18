// req.params ==> São os parametros da rota, é acessado apenas com o req. São as partes que vem na rota da url. Ex: /profiles/id

//req.query ==> é uma query string que vc faz na url, então vc poderia ter uma url, para começar a query string vc colocaria interrogação, e se vc quiser por mais vc usa o &. Ex: /profiles/?chave=1=valor1&chave2=valor2

//req.body ==> é o que vem na requisição do body, exemplo quando vc posta um formulario e o method importa, quer dizer que o metodo é post, ele vai fazer um post para a requisição. Então vc tem que tratar essa rota como post no express e o que vc receber no corpo da requisição vai ir no req.body e se vc quiser uma chave especifica vc pega o que tiver de acordo com o name de uma tag do formulario

const express = require('express'); 
const app = express(); 

app.use(express.urlencoded({ extended: true })) //quando algum postar alguma coisa ele vai tratar o body e vai dar um objeto do que foi postado

app.get('/', (req, res) => {
    res.send('                                                                                              <form action="/" method="POST"> NOME: <input type="text" name="qualquercoisa">                         NOME2: <input type="text" name="seila">                                                       <button>Enviar</button> </form>') 
}); //o campo vai vir dentro do objeto, então vc vai receber dentro do obj o name da tag como chave e o valor que vc colocou como valor da chave

app.get('/testes/:idUsuarios?', (req, res) => { //id usuario é o que ele vai receber na chave do obj,o ? quer dizer que o parametro que ele esta enviando pode ou não ser recebido
    console.log(req.params) //vc esta pedindo os parametros do que foi requisitado pelo usuario
    console.log(req.query) // esta mostrando
    res.send(req.params) // os parametros é acessado com o req, mas ele esta mostrando usando o res.send
})

app.post('/', (req, res) => { 
    console.log(req.body) // o req.body é o que vem para post ou para put
    res.send(req.body.qualquercoisa); //o qualquercoisa esta vindo do form com o name ="qualquercoisa"
});

app.listen(3000, () => {
    console.log('Acessar: http://localhost:3000')
    console.log('Servidor executando na porta 3000') 
}); 
 