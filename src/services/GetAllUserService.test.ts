import { query } from "express";
import { getConnection } from "typeorm";
import  createConnection  from "../database";
import { v4 as uuid } from 'uuid'
import { GetAllUserService } from './GetAllUserService';
import { CreateUserService } from './CreateUsersServices'

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


    it('Deve retornar todos os usuarios cadastrados', async()=>{
        const createUserService = new CreateUserService()

        await createUserService.execute({
            id: uuid(),
            nome: 'algum usuario',
            email: 'algumusuario@gmail.com',
            idade: 25
        })
    
        await createUserService.execute({
            id: uuid(),
            nome: 'outro usuario',
            email: '',
            idade: 25
        })

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

        const result = await GetAllUserService.execute();

        expect(result).toMatchObject(expectedResponse)
    })

})