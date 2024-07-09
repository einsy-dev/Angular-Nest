import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDoorInput {
  @Field()
  color: string;
}
