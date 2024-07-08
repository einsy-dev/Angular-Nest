import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDoorInput {
  @Field()
  username: string;

  @Field({ nullable: true })
  displayName?: string;
}
