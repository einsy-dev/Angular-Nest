import { Door } from '@/model/door.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoorService {
  constructor(
    @InjectRepository(Door) private readonly doorRepository: Repository<Door>,
  ) {}
  async create(door): Promise<Door[]> {
    const newDoor = this.doorRepository.create(door);
    return await this.doorRepository.save(newDoor);
  }
  findAll(): Promise<Door[]> {
    return this.doorRepository.find();
  }

  findById(id: string): Promise<Door> {
    return this.doorRepository.findOneBy({ id });
  }
  async updateDoor(door: Door): Promise<Door> {
    const oldDoor = await this.doorRepository.findOneBy({ id: door.id });
    if (!oldDoor) return null;

    Object.assign(oldDoor, door);
    return await this.doorRepository.save(oldDoor);
  }

  deleteDoor(id: string): Promise<void> {
    this.doorRepository.delete(id);
    return null;
  }
}
