//aqui estamos criando o model

import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs'
//O model é referente a um dado, então estamos criando o model aluno que é referente a tabela Alunos

export default class User extends Model { //esta fazendo a classe Aluno ser uma extensão da classe Model
  static init(sequelize) { //conexão do modulo, ele é a connection que estamos enviando para o index.js
    super.init({
      nome: { //quando for validar coloca entre {}
        type: Sequelize.STRING,
        defaultValue: '', //se o campo não for enviado o valor dele é um campo vazio
        validate: { //nessa chave validate é um objeto onde vai fazer as validações desse campo nome
          notEmpty: { //não quer que o campo fique vazio
            msg: 'Campo nome não pode ficar vazio'
          },
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '', //se o campo não for enviado o valor dele é um campo vazio
        unique: {
          msg: 'Email ja existe'
        },
        validate: { //nessa chave validate é um objeto onde vai fazer as validações desse campo nome
          isEmail: { //se for email
            msg: 'Email Invalido'
          }
        }
      },
      password_hash: { //vamos pedir pro usuario digitar uma senha e baseado na senha vamos digitar o hash
        type: Sequelize.STRING,
        defaultValue: '', //se o campo não for enviado o valor dele é um campo vazio
      },
      password: { //um campo que não vai existir na base de dados
        type: Sequelize.VIRTUAL,
        defaultValue: '', //se o campo não for enviado o valor dele é um campo vazio
        validate: { //nessa chave validate é um objeto onde vai fazer as validações desse campo nome
          //notEmpty: { //não quer que o campo fique vazio
            //msg: 'Campo nome não pode ficar vazio'
          //},
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres'
          },
        }
      },
      //quando for salvar os dados na base de dados, antes de salvar vai jogar os valores do password no password_hash
    },
    {
      sequelize,
    });
    this.addHook('beforeSave', async user => {
      if(user.password){ //se o password for enviado vai fazer a criptografia
        user.password_hash = await bcryptjs.hash(user.password, 8);//esta fazendo o campo de senha do bd receber o campo que não vai pro bd e esse campo que vai pro bd vai criptografado
      }
    })//o primeiro argumento é o local em que queremos que isso aconteça, pode ser antes de crira, antes de definir, antes de destruir etc. O segundo parametro vai ser uma função que vai receber o usuario. O 8 é total de numeros da criptografia
    return this //esta chamando o init do pai que é a classe Model, estamos mandando 2 objetos um vai ter os campos o outro vai ter o sequelize que estamos recebendo no static
  }
}

//precisamos falar pro sequelize que esse modulo precisa da conexão dele

