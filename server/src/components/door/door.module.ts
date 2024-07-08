import { Module } from '@nestjs/common';
import { DoorService } from './door.service';
import { DoorController } from './door.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Door } from '@/model/door.model';
import { DoorResolver } from './door.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Door])],
  providers: [DoorResolver, DoorService],
  controllers: [DoorController],
  exports: [DoorResolver],
})
export class DoorModule {}
