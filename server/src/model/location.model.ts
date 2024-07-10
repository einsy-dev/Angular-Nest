import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
