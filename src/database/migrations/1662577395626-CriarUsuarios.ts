import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CriarUsuarios1662577395626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name:'nome',
                        type:'string',
                        isNullable:false
                    },
                    {
                        name:'email',
                        type: 'string',
                        isNullable: true
                    },
                    {
                        name:'idade',
                        type:'number',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
