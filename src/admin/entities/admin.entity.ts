import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    email:string

    @Column()
    phone:string

    @Column()
    password:string

    @Column({default:false})
    is_creator:boolean


    @Column({default:false})
    is_active:boolean


    @Column({default:""})
    refresh_token:string
}



