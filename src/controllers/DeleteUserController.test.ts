import { createConnection, getConnection } from 'typeorm'
import { FakeData } from '../utils/fakeData/fakeData'
import { makeMockRequest } from '../utils/mocks/MockRequest'
import { makeMockResponse } from '../utils/mocks/MockResponse'
import { DeleteUserController } from './DeleteUserController'


describe('DeleteUserController', ()=>{
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })
    afterAll(async () => {
        const connection = getConnection()
        connection.close()
    })
    const fakeData = new FakeData()

    it('Deve retonar status 204 quando o usuario for deletado',async ()=>{
        const mockUser = await fakeData.createUsers();

        const deleteUserController = new DeleteUserController

        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        });

        const response = makeMockResponse()

        await deleteUserController.handle(request,response)

        expect(response.state.status).toBe(204)
    })
})