import User from '../models/User'; //estamos importando o model

class UserController {

  //CREATE/STORE
  async store(req, res){ //aqui que vai ficar a requisição e a resposta
    try{
      const novoUser = await User.create(req.body) //vc ta jogando os dados que vem na requisição aqui dentro
      return res.json(novoUser); //o User que esta sendo criado deve ser retornado de cara
    }catch(e){
      for (let erro of e.errors){
        return res.status(400).json(erro); //ta usando o map para cada volta do laço ter um erro, o map retorna o mesmo array com valores diferentes
      }

    }
  }

  //INDEX
  async index(req, res){
    try{
      const users = await User.findAll();//vai retornar todos os usuarios que estiverem na base de dados
      return res.json(users); //em um metodo assincrono vc precisa retornar um valor
    }catch(erro){//esse erro ele não quer mostrar pro usuario, ele so quer avisar que o programa quebrou
      return res.json(null)
    }
  }

  //SHOW
  async show(req, res){//precisamos receber um parametro
    try{
      const id = req.params.id //isso aqui vai vir na rota
      const user = await User.findByPk(id);//vamos encontrar um usuario por id

      return res.json(user); //em um metodo assincrono vc precisa retornar um valor
    }catch(erro){//esse erro ele não quer mostrar pro usuario, ele so quer avisar que o programa quebrou
      return res.json(null)
    }
  }

  //UPDATE
  async update(req, res){//update vai ser uma mistura de show com store, porque vc tem que selecionar um usuario ver se ele existe e ai atualizar seus dados
    try{
      if(!req.params.id){ //se vc não tiver o id na rota, mesmo que se vc tivesse um id que não existe, vai dar esse erro, pois quer dizer que no parametro da rota vc não mandou nada depois de /users, por exemplo: /users/1
        return res.status(400).json({ //o json é para respondermos e vermos no insomnia
          errors: ['Id Não Enviado'],
        })
      }

      const id = req.params.id //isso aqui vai vir na rota
      const user = await User.findByPk(id);//vamos encontrar um usuario por id na base de dados

      if(!user){//se o id não existir, vai retornar a resposta em formato de json e dentro desse json vai ter um objeto com a chave errors e dentro dessa chave os valores estão dentro de um array
        return res.status(400).json({ //o json é para respodermos e vermos no insomnia
          errors: ['Usuario Não Existe'],
        })
      }

      //aqui embaixo vc tem certeza que esta recebendo esse usuario
      const novosDados = user.update(req.body); //o que for mandando no req.body vai atualizar

      return res.json(novosDados); //esta retornando o usuario com os dados atualizados
    }catch(erro){//esse erro ele não quer mostrar pro usuario, ele so quer avisar que o programa quebrou
      return res.json(null)
    }
}

  //DELETE
  async delete(req, res){//update vai ser uma mistura de show com store, porque vc tem que selecionar um usuario ver se ele existe e ai atualizar seus dados
    try{
      if(!req.params.id){ //se vc não tiver o id na rota, mesmo que se vc tivesse um id que não existe, vai dar esse erro, pois quer dizer que no parametro da rota vc não mandou nada depois de /users, por exemplo: /users/1
        return res.status(400).json({ //o json é para respondermos e vermos no insomnia
          errors: ['Id Não Enviado'],
        })
      }

      const id = req.params.id //isso aqui vai vir na rota
      const user = await User.findByPk(id);//vamos encontrar um usuario por id na base de dados

      if(!user){//se o id não existir, vai retornar a resposta em formato de json e dentro desse json vai ter um objeto com a chave errors e dentro dessa chave os valores estão dentro de um array
        return res.status(400).json({ //o json é para respodermos e vermos no insomnia
          errors: ['Usuario Não Existe'],
        })
      }

      //aqui embaixo vc tem certeza que esta recebendo esse usuario
      await user.destroy(); //aqui vamos deletar o usuario com o id informado

      return res.json(user); //esta retornando o usuario com os dados atualizados
    }catch(erro){//esse erro ele não quer mostrar pro usuario, ele so quer avisar que o programa quebrou
      return res.json(null)
    }
}

//Sempre que formos trabalhar com base de dados retorna aysnc e await, porque isso retornam promises e precisamos esperar se o que estamos fazendo e esta sendo executado na base de dados retorna alguma coisa para gente

}


export default new UserController();



//ASSIM FIZEMOS UMA API REST ==> CRUD. ENTÃO CRIAMOS, MOSTRAMOS TODOS OU APENAS UM USUARIO, ATUALIZAMOS E DELETAMOS USUARIOS
