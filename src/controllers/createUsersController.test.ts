import { CreateUsersController } from './CreateUsersControllers'

describe('createUserController', () => {
    it('Deve retornar o id do usuario criado', () => {
        const createUserController = new CreateUsersController();

        const result = CreateUsersController.handler()
    })
})