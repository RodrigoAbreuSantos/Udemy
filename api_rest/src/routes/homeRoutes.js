import { Router } from "express";
import homeController from "../controllers/HomeController";
const router = new Router();

router.get('/', homeController.index) //ele esta jogando as funções diretamente aqui, mas elas vão dentro do controler

export default router; //aqui que vai ficar as rotas

