import { Module } from '@nestjs/common';
import { LocationResolver } from './location.resolver';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '@/model/location.model';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  providers: [LocationResolver, LocationService],
  exports: [LocationResolver],
})
export class LocationModule {}
