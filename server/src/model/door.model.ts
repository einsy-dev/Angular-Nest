import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Door {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  style: string;

  @Field()
  @Column()
  color: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  material: string;

  @Field()
  @Column()
  price: string;

  @Field()
  @Column()
  width: number;

  @Field()
  @Column()
  height: number;

  @Field()
  @Column()
  thickness: number;

  @Field()
  @Column({ default: 0 })
  quality: number;

  @Field()
  @Column()
  add: string;
}
