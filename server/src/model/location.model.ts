import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import JSON, { GraphQLJSON } from 'graphql-type-json';

@ObjectType()
@Entity()
export class Location {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @Column('simple-json', { nullable: true })
  address: JSON;
}
