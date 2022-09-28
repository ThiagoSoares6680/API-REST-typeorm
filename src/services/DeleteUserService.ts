import { getRepository } from 'typeorm'
import { Usuarios } from '../entities/Usuarios'

interface IUser {
    id: string
}

class DeleteUserService {
    async execute({id}:IUser){
        const user = await getRepository(Usuarios)
        .createQueryBuilder()
        .delete()
        .from(Usuarios)
        .where('id = :id',{id})
        .execute();

        console.log(user)
        return user.raw
    }
}
export { DeleteUserService }