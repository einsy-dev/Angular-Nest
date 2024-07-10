import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Door } from '@/model/door.model';
import { DoorService } from './door.service';
import { DoorI } from './door.interface';

@Resolver()
export class DoorResolver {
  constructor(private readonly doorService: DoorService) {}

  @Mutation((returns) => Door)
  async createDoor(@Args('params') params: DoorI) {
    return this.doorService.create(params);
  }

  @Query((returns) => [Door])
  async doors(@Args('params', { defaultValue: {} }) params: DoorI) {
    return this.doorService.find(params);
  }

  @Query((returns) => [Door], { nullable: true })
  async door(@Args('params') params: DoorI) {
    return this.doorService.findOne(params);
  }

  @Mutation((returns) => Door)
  async updateDoor(@Args('id') id: string, @Args('params') params: DoorI) {
    return this.doorService.update(id, params);
  }

  @Mutation((returns) => Door)
  async deleteDoor(@Args('id') id: string) {
    return this.doorService.delete(id);
  }
}
