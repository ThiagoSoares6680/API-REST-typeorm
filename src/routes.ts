import { Router, Request, Response } from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";

const router = Router()
const createUsersController = new CreateUsersController();


router.get('/', (request:Request, response:Response) => {
    return response.json({mensagem:'Tudo ok na rota get'})
})

router.post('/users', createUsersController.handle)

export {router}