import { Door } from '@/model/door.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationService } from '../location/location.service';

@Injectable()
export class DoorService {
  constructor(
    @InjectRepository(Door) private readonly doorRepository: Repository<Door>,
    private readonly locationService: LocationService,
  ) {}

  async create({ location, ...data }): Promise<Door> {
    const newOne = await this.doorRepository.create(data);
    if (location) {
      const newLocation = await this.locationService.findOne({ id: location });
      newOne.location = newLocation;
    }
    return await this.doorRepository.save(newOne);
  }

  async find(params): Promise<Door[]> {
    return this.doorRepository
      .createQueryBuilder('door')
      .leftJoinAndSelect('door.location', 'location')
      .where(params)
      .getMany();
  }

  async findOne(params): Promise<Door> {
    return this.doorRepository.createQueryBuilder().where(params).getOne();
  }

  async update(id, data): Promise<Door> {
    const oldOne = await this.doorRepository
      .createQueryBuilder()
      .where({ id })
      .getOne();
    if (!oldOne) return null;
    Object.assign(oldOne, data);
    return await this.doorRepository.save(oldOne);
  }

  async delete(id): Promise<any> {
    const result = await this.doorRepository
      .createQueryBuilder()
      .where({ id })
      .delete();
    return result;
  }
}
