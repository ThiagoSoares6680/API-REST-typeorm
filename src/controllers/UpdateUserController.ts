import { Request, Response } from 'express'
import { UpdateUserService } from '../services/UpdateUserService'

class UpdateUserController {
    async handle(request: Request, response:Response){
        const updateUserService = new UpdateUserService()

        const { id, nome, email, idade } = request.body
        
        if(id.length === 0){
            return response.status(400).json({mensagem: 'Id não informado'})
        }

        if(nome.length === 0){
            return response.status(400).json({mensagem: 'informe o nome'})
        }
        
        await updateUserService.execute({id, nome, email, idade})

        return response.status(204).json({mensagem: 'Alterado com sucesso!'})
    }

}
export { UpdateUserController }