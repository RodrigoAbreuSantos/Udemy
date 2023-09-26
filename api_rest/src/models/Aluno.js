//aqui estamos criando o model

import Sequelize, { Model } from "sequelize";
//O model é referente a um dado, então estamos criando o model aluno que é referente a tabela Alunos

export default class Aluno extends Model { //esta fazendo a classe Aluno ser uma extensão da classe Model
  static init(sequelize) { //conexão do modulo, ele é a connection que estamos enviando para o index.js
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT
    },
    {
      sequelize,
    }); //esta chamando o init do pai que é a classe Model, estamos mandando 2 objetos um vai ter os campos o outro vai ter o sequelize que estamos recebendo no static
    return this
  }
}

//precisamos falar pro sequelize que esse modulo precisa da conexão dele

