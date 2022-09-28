import { DeleteUserService } from "./DeleteUserService";
import { FakeData } from "../utils/fakeData/fakeData";
import { getConnection } from "typeorm";
import  createConnection  from "../database";

describe('DeleteUserService', ()=> {
    beforeAll(async()=>{
        const connection =  await createConnection()
        connection.runMigrations()
    })

    afterAll(async() =>{
        const connection = getConnection()
        await connection.close()
    })

    const fakeData = new FakeData()

    it('Deve retonar um array vazio quando usuarios for deletado', async () => {
        const mockUser = await fakeData.createUsers();

        const deleteUserService = new DeleteUserService()

        const result = await deleteUserService.execute({id:mockUser.id})
        
        expect (result).toHaveLength(0)

    })
})