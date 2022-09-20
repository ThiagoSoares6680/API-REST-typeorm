import { getConnection } from 'typeorm';
import  createConnections  from '../database/';
import { Request, response } from 'express';
import { CreateUsersController } from './CreateUsersController'
import { makeMockResponse } from '../utils/mocks/MockResponse';

describe('CreateUserController', () => {
    beforeAll(async() => {
        const connection = await createConnections()
        await connection.runMigrations()

    })

    afterAll(async()=>{
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const createUserController = new CreateUsersController();

    const response = makeMockResponse()

    it('Deve retornar status 201 quando o usuario for criado', async () => {

        const request = {
            body: {
                nome:'Algum usuario',
                email: 'email@gmail.com',
                idade: '15'
            }
        } as Request

        const response = makeMockResponse()

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it ('Deve retornar status 401 quando o nome não for informado', async() => {
        const request = {
            body: {
                nome:'',
                email: 'email@gmail.com',
                idade: '15'
            }
        } as Request

        await  createUserController.handle(request, response)

        expect(response.state.status).toBe(401)
    })

    it('Deve retornar status 201 quando email não for informado', async() =>{
        const request = {
            body: {
                nome:'Algum usuario',
                email: '',
                idade: '15'
            }
        } as Request

        await  createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })
})