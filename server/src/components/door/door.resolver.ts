import { Resolver, Query } from '@nestjs/graphql';
import { Door } from '@/model/door.model';

@Resolver()
export class DoorResolver {
  @Query((returns) => Door)
  getDoor() {
    return {
      id: '1',
    };
  }
}
