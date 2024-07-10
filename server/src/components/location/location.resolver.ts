import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from '@/model/location.model';
import { LocationI } from './location.interface';

@Resolver()
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation((returns) => Location)
  async createLocation(@Args('params') params: LocationI) {
    return this.locationService.create(params);
  }

  @Query((returns) => [Location])
  async locations(@Args('params', { defaultValue: {} }) params: LocationI) {
    return this.locationService.find(params);
  }

  @Query((returns) => [Location], { nullable: true })
  async location(@Args('params') params: LocationI) {
    return this.locationService.findOne(params);
  }

  @Mutation((returns) => Location)
  async updateLocation(
    @Args('id') id: string,
    @Args('params') params: LocationI,
  ) {
    return this.locationService.update(id, params);
  }

  @Mutation((returns) => Location)
  async deleteLocation(@Args('id') id: string) {
    return this.locationService.delete(id);
  }
}
