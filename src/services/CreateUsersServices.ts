import { createQueryBuilder, getConnection, getRepository } from "typeorm"
import { Usuarios } from "../entities/Usuarios"


interface IUsuarios {
    id: string,
    nome: string,
    email?: string,
    idade: number
}

class CreateUserService {
    async execute({ id, nome, email, idade}: IUsuarios){

        const usuarios = await getRepository(Usuarios)
            .createQueryBuilder()
            .insert()
            .into(Usuarios)
            .values([
                {
                    id: id,
                    nome: nome,
                    email: email,
                    idade: idade
                }
            ])
            .execute() 
        
        return usuarios.identifiers[0]
    }
}

export { CreateUserService }