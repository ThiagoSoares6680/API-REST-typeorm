import  createConnection  from '../database';
import { getConnection } from 'typeorm';
import { makeMockRequest } from '../utils/mocks/MockRequest';
import { makeMockResponse } from '../utils/mocks/MockResponse';
import { GetAllUserController } from './GetAllUserController';
import { FakeData } from '../utils/fakeData/fakeData'

describe('GetAllUserController', ()=>{
    beforeAll(async()=>{
        const connection =  await createConnection()
        connection.runMigrations()
    })

    afterAll(async() =>{
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const fakeData = new FakeData()

    it('Deve retomar status 200 quando pegar todos usuarios', async()=>{
        await fakeData.execute();

        const getAllUserController = new GetAllUserController();

        const request = makeMockRequest({})

        const response = makeMockResponse()

        await getAllUserController.handle(request,response)

        expect(response.state.status).toBe(200)

    })
})