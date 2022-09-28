import { Router, Request, Response } from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router()
const createUsersController = new CreateUsersController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


router.get('/', (request:Request, response:Response) => {
    return response.json({mensagem:'Tudo ok na rota get'})
})

router.post('/usuarios', createUsersController.handle)
router.get('/usuarios', getAllUserController.handle)
router.patch('/usuario', updateUserController.handle)
router.delete('/usuario/:id', deleteUserController.handle)

export {router}