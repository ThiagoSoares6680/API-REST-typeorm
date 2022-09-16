import {Request, Response} from 'express'
import { CreateUserService } from './services/CreateUsersServices'
import { v4 as uuid } from 'uuid'

class CreateUsersController{
    async handle(request:Request, response: Response) {
        
        const createUserService = new CreateUserService();

        const nome = request.body.name
        const email = request.body.email
        const idade = request.body.idade
        const id = uuid();

        if(nome.length === 0 || idade.length === 0 ){
            return response.status(401).json({mensagem:`Preencha todos os dados`})
        }
        
        
        const user = await createUserService.execute({id,nome, email, idade})

        return response.status(201).json(user)
    }
}

export { CreateUsersController };