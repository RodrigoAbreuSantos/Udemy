//migrations é referente a criar tabela na base de dados

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    //Add altering commands here.

     //Example:
     await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER, //é um campo inteiro
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down (queryInterface) {

     //Add reverting commands here.

     //Example:
     await queryInterface.dropTable('alunos');
  }
};

//queremos criar uma tabela de alunos de uma escola, a tabela vai se chamar alunos com letras minusculas, então quer dizer que vai ter um models que se chama aluno dentro do seu sistema. Então a tabela alunos onde salvamos varios alunos vem junto com o model aluno
//
