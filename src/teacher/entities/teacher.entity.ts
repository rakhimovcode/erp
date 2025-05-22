import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Teacher {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  subject: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column({ enum: ["teacher", "assistant"] })
  role: string;

  @Field()
  @Column({ default: false })
  is_active: boolean;

  @Field()
  @Column({ default: "" })
  refresh_token: string;
}
