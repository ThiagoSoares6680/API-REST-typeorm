import { Router, Request, Response } from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { GetAllUserController } from "./controllers/GetAllUserController";

const router = Router()
const createUsersController = new CreateUsersController();
const getAllUserController = new GetAllUserController();


router.get('/', (request:Request, response:Response) => {
    return response.json({mensagem:'Tudo ok na rota get'})
})

router.post('/usuarios', createUsersController.handle)
router.get('/usuarios', getAllUserController.handle)

export {router}