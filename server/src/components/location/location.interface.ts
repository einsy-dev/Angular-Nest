import { Field, InputType } from '@nestjs/graphql';
import JSON, { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class LocationI {
  @Field({ nullable: true })
  name: string;

  @Field(() => GraphQLJSON, { nullable: true })
  address: JSON;
}
