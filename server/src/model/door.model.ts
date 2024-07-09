import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from './location.model';

@ObjectType()
@Entity()
export class Door {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  style: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  color: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  type: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  material: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  price: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  width: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  height: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  thickness: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  quality: number;

  @Field({ nullable: true })
  @JoinColumn()
  @OneToOne(() => Location)
  location?: Location;
}
