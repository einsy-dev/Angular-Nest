import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DoorI {
  @Field()
  style: string;

  @Field()
  color: string;

  @Field()
  type: string;

  @Field()
  material: string;

  @Field()
  price: string;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field()
  thickness: number;

  @Field()
  quality: number;

  @Field()
  location: string;
}
