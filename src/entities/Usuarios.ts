import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity('usuarios')
class Usuarios {
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string

    @Column()
    email: string
    
    @Column()
    idade: number
}

export { Usuarios }