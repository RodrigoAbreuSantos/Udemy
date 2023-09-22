const { async } = require('regenerator-runtime');
const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login'); //estamos renderizando para a pagina login que criaremos nos views
    return;
}

exports.register = async (req, res) => { //por ser um metodo async 
    try{
        const login = new Login(req.body)//vai ser uma instancia da classe Login
    //fazendo isso criamos um objeto que recebe o req.body
        await login.register() //esta chamando a função register

        if(login.errors.length > 0){ //se tiver erro vai mostrar uma mensagem auto destrutiva da tela
            req.flash('errors', login.errors); // esta pegando o que o usario requisitou e esta mostrando uma mensagem de erro na tela
            req.session.save(function(){
                return res.redirect('login/index');
        }); //esta salvando a seção, para poder voltar para a pagina de login caso de algum erro. Esta criando uma função de calback para voltar para a pagina anterior se der algum erro então se vc envia os dados para a rota /login/register e tem algum erro, vai mostrar na tela uma mensagem auto destrutiva e vai voltar para a rota /login
        return;
    }
    req.flash('success', 'Seu usuario foi criado com sucesso'); // esta pegando o que o usario requisitou e esta mostrando uma mensagem de erro na tela
    req.session.save(function(){
        return res.redirect('login/index');
    });
    }catch(erro){
        console.log(erro);
        return res.render('404'); //se acontecer algum erro vai renderizar a pagina 404
    }
}

//sempre que vc fizer operações com bases de dados vc vai ter que trabalhar com promises, porque retorna uma promise