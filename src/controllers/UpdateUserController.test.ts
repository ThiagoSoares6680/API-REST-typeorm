import { response } from 'express'
import { createConnection } from 'typeorm'
import { getConnection } from 'typeorm'
import { FakeData } from '../utils/fakeData/fakeData'
import { makeMockResponse } from '../utils/mocks/MockResponse'
import { UpdateUserController } from './UpdateUserController'
import { Request } from 'express'


describe('UpdateUserController', ()=> {
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

    it('Deve retornar status 404 quando usuario for editado', async () => {

        const mockUser = await fakeData.createUsers()

        const updateUserController = new UpdateUserController()

        const request = {
            body: {
                id: mockUser.id,
                nome: 'Outro nome',
                email: 'email@email.com.br',
                idade: 25
            }
        } as Request

        const response = makeMockResponse()

        await updateUserController.handle(request, response)

        expect (response.state.status).toBe(204)
    })

})
