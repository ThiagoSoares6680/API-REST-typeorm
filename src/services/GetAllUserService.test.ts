import { getConnection } from "typeorm";
import  createConnection  from "../database";
import { GetAllUserService } from './GetAllUserService';
import { FakeData } from '../utils/fakeData/fakeData'


describe('GetAllUserService', () => {
    beforeAll(async() => {
        const connection = await createConnection()
        await (connection).runMigrations
    })
    afterAll(async() => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const fakeData = new FakeData()


    it('Deve retornar todos os usuarios cadastrados', async()=>{
        
        await fakeData.execute()

        const expectedResponse = [
            {
                nome: 'algum usuario',
                email: 'algumusuario@gmail.com',
                idade: 25
            },
            {
                nome: 'outro usuario',
                email: '',
                idade: 25
            }
        ]

        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse)
    })

})