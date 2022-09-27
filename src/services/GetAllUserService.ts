import { getRepository } from 'typeorm'
import { Usuarios } from '../entities/Usuarios'

class GetAllUserService{
    async execute(){
        const usuarios = await getRepository(Usuarios)
            .createQueryBuilder('usuarios')
            .select()
            .getMany()

        console.log(usuarios)
        return usuarios
    }

}

export { GetAllUserService }