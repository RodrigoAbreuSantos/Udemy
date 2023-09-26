import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno' //todo model que criamos vai vir dentro desse arquivo aqui
import User from "../models/User";

const models = [Aluno, User]; //vamos criar um array Aluno que vai conter todos os nosso modulos

const connection = new Sequelize(databaseConfig)//vai mandar as configurações da nossa base de dados aqui dentro
models.forEach(model => {
  model.init(connection) //estamos recebendo a conexão como parametro
})//vai percorrer esse aray, porque se tiver mais modulos quando ele for colocando eles aqui vai fazer isso para todos automaticamente


//SEMPRE QUE VC CRIA UM MODULO VC TRAZ ELE AQUI E COLOCA DENTRO DO ARRAY
