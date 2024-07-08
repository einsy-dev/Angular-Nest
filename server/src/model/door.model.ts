import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Door {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  // @Field()
  // @Column({ nullable: true })
  // firstName: string;

  // @Field()
  // @Column({ nullable: true })
  // lastName: string;

  // @Field()
  // @Column({ default: true })
  // isActive: boolean;
}
