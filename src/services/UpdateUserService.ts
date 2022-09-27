import { getRepository } from "typeorm";
import { Usuarios } from "../entities/Usuarios";

interface IUser{
    id: string;
    nome: string;
    email: string;
    idade: number
}

class UpdateUserService{
    async execute({id, nome, email, idade}:IUser){
        const user = await getRepository(Usuarios)
            .createQueryBuilder()
            .update()
            .set({
                nome: nome,
                email: email,
                idade: idade,
            })
            .where('id =:id', {id})
            .execute()

        console.log(user)
        return user.raw
    }

}

export { UpdateUserService }