import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from '@/model/location.model';
import { LocationI } from './location.interface';

@Resolver()
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation((returns) => Location)
  async createLocation(@Args('data') data: LocationI) {
    return this.locationService.create(data);
  }

  @Query((returns) => [Location])
  async locations(@Args('data', { defaultValue: {} }) data: LocationI) {
    return this.locationService.find(data);
  }

  @Query((returns) => [Location], { nullable: true })
  async location(@Args('data') data: LocationI) {
    return this.locationService.findOne(data);
  }

  @Mutation((returns) => Location)
  async updateLocation(@Args('id') id: string, @Args('data') data: LocationI) {
    return this.locationService.update(id, data);
  }

  @Mutation((returns) => Location)
  async deleteLocation(@Args('id') id: string) {
    return this.locationService.delete(id);
  }
}
