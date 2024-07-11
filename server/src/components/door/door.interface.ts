import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DoorI {
  @Field({ nullable: true })
  style: string;

  @Field({ nullable: true })
  color: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  material: string;

  @Field({ nullable: true })
  price: string;

  @Field({ nullable: true })
  width: number;

  @Field({ nullable: true })
  height: number;

  @Field({ nullable: true })
  thickness: number;

  @Field({ nullable: true })
  quality: number;

  @Field({ nullable: true })
  location: string;
}
