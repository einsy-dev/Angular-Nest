import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Door } from '@/model/door.model';
import { DoorService } from './door.service';
import { CreateDoorInput } from './door.interface';

@Resolver()
export class DoorResolver {
  constructor(private readonly doorService: DoorService) {}

  @Mutation((returns) => Door)
  createDoor(@Args('door') door: CreateDoorInput) {
    return this.doorService.create(door);
  }

  @Query((returns) => [Door])
  getDoors() {
    return this.doorService.findAll();
  }
}
