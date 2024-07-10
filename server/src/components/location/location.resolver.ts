import { Args, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from '@/model/location.model';
import { LocationI } from './location.interface';

@Resolver()
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query((returns) => [Location])
  async locations(@Args('params', { defaultValue: {} }) params: LocationI) {
    return this.locationService.find(params);
  }

  @Query((returns) => [Location], { nullable: true })
  async location(@Args('params') params: LocationI) {
    return this.locationService.findOne(params);
  }
}
