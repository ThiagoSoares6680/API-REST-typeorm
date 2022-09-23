import { getRepository } from 'typeorm'
import { Usuarios } from '../entities/Usuario'

class GetAllUserService{
    static execute: any
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