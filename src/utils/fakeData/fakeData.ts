import { CreateUserService } from '../../services/CreateUsersServices'
import { v4 as uuid } from 'uuid'

class FakeData{
    createUserService = new CreateUserService()

    async execute(){
        
        await this.createUserService.execute({
            id: uuid(),
            nome: 'algum usuario',
            email: 'algumusuario@gmail.com',
            idade: 25
        })
    
        await this.createUserService.execute({
            id: uuid(),
            nome: 'outro usuario',
            email: '',
            idade: 25
        
        })
    }
    async createUsers(){
        const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'algum usuario',
            email: 'algumusuario@gmail.com',
            idade: 25
        })

        return user
    }

}

export { FakeData }