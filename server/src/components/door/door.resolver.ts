import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Door } from '@/model/door.model';
import { DoorService } from './door.service';
import { DoorI } from './door.interface';

@Resolver()
export class DoorResolver {
  constructor(private readonly doorService: DoorService) {}

  @Mutation((returns) => Door)
  async createDoor(@Args('data') data: DoorI) {
    return this.doorService.create(data);
  }

  @Query((returns) => [Door])
  async doors(@Args('data', { defaultValue: {} }) data: DoorI) {
    return this.doorService.find(data);
  }

  @Query((returns) => [Door], { nullable: true })
  async door(@Args('data') data: DoorI) {
    return this.doorService.findOne(data);
  }

  @Mutation((returns) => Door)
  async updateDoor(@Args('id') id: string, @Args('data') data: DoorI) {
    return this.doorService.update(id, data);
  }

  @Mutation((returns) => Door)
  async deleteDoor(@Args('id') id: string) {
    return this.doorService.delete(id);
  }
}
