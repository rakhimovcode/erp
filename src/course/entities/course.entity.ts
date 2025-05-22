import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Course {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  desciption: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  duration: number;

  @Field()
  @Column()
  lessonsInWeek: number
}
