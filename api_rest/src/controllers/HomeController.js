import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res){ //aqui que vai ficar a requisição e a resposta
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otavio',
      email: 'luiz@gmail.com',
      idade: 46,
      peso: 87,
      altura: 2.5
    })
    res.json(novoAluno); //o aluno que esta sendo criado deve ser retornado de cara
  }
}

export default new HomeController();
