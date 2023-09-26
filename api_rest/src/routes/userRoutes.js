import { Router } from "express";
import UserController from "../controllers/UserController";
const router = new Router();

router.post('/', UserController.store); //esta criando um usuario então é post, a rota é /users, mas no app ja esta com a rota então não precisa por aqui: this.app.use('/users', userRoutes); Tudo que tiver aqui vai passar pela rota /users

router.get('/', UserController.index); //esta obtendo todos os usuario do banco de dados, então é get

router.get('/:id', UserController.show); //essa rota tambem vai ser get, mas a diferença é que ela recebe um parametro que é o id, por isso estamos criando essa rota com users/:id. O :id vai ser o id da pessoa então na rota vc colca o id por exemplo: /users/1

router.put('/:id', UserController.update);// então de acordo com o id da rota vai atualizar o usuario com esse id

router.delete('/:id', UserController.delete)//estamos deletando o usuario de acordo com o id da rota



//QUANDO VAMOS NO INSOMNIA CONSUMIMOS ESTA API

export default router; //aqui que vai ficar as rotas

/*
Em cada controller pode ter até 5 metodos

index ==> lista todos os usuarios. Quando é index é GET
store/create ==. cria um novo usuario. Quando é store/create é POST
delete ==> Apaga um usuario. Quando é delete é DELETE
show ==> mostra um usuario. Quando é show é GET
update ==> atualiza um usuario. Quando é update é PATCH ou PUT

PATCH ==> quando vc altera somente um valor
PUT ==> Quando vc pega um objeto inteiro e substitui ele por outro objeto inteiro
*/
