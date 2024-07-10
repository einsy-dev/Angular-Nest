import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocationI {
  @Field({ nullable: true })
  name?: string;
}
