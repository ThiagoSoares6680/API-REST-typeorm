import {Request, Response} from 'express';
import { v4 as uuid } from 'uuid';
import { CreateUserService } from './services/CreateUsersServices';


class CreateUsersController{
    async handle(request:Request, response: Response) {
        
        const createUserService = new CreateUserService();

        const nome = request.body.nome;
        const email = request.body.email;
        const idade = request.body.idade;
        const id = uuid();

        if(nome.length === 0 ){
            return response.status(401).json({mensagem:`Preencha seu nome`})
        }
        
        
        const user = await createUserService.execute({id,nome, email, idade})

        return response.status(201).json(user)
    }
}


export { CreateUsersController };