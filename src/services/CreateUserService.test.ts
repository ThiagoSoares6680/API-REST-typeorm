import { getConnection } from "typeorm";
import createConnection  from '../database'
import { CreateUserService } from "./CreateUsersServices";

describe('CreateUserService', () =>{
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    it('Deve retornar o id do usuario criado', async() => {
        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id:'',
        })
    })
})