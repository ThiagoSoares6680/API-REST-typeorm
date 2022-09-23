import { CreateUserService } from '../../services/CreateUsersServices'
import { v4 as uuid } from 'uuid'

class FakeData{
    async execute(){
        const createUserService = new CreateUserService()
        
        await createUserService.execute({
            id: uuid(),
            nome: 'algum usuario',
            email: 'algumusuario@gmail.com',
            idade: 25
        })
    
        await createUserService.execute({
            id: uuid(),
            nome: 'outro usuario',
            email: '',
            idade: 25
        
        })
    }

}

export{ FakeData }