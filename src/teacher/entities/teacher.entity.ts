import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  subject:string

  @Column()
  password: string;

  @Column({enum:["teacher",'assistant']})
  role:string

  @Column({ default: false })
  is_active: boolean;

  @Column({ default: "" })
  refresh_token: string;
}
