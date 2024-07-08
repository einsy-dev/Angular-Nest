import { Module } from '@nestjs/common';
import { DoorService } from './door.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Door } from '@/model/door.model';
import { DoorResolver } from './door.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Door])],
  providers: [DoorResolver, DoorService],
  exports: [DoorResolver],
})
export class DoorModule {}
