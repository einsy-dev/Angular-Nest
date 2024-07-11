import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from './location.model';

@ObjectType()
@Entity()
export class Door {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  style: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  color: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  material: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  price: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  width: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  height: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  thickness: number;

  @Column({ default: 0 })
  @Field()
  quantity: number;

  @ManyToOne(() => Location, (location) => location)
  @JoinTable({ name: 'location' })
  @Field({ nullable: true })
  location: Location;
}
