import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Location {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;
}
