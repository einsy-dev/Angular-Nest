import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '@/model/location.model';
import { LocationI } from './location.interface';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async create(data): Promise<Location[]> {
    const newOne = this.locationRepository.create(data);
    return await this.locationRepository.save(newOne);
  }

  async find(params): Promise<Location[]> {
    return this.locationRepository.createQueryBuilder().where(params).getMany();
  }

  async findOne(params): Promise<Location> {
    return this.locationRepository.createQueryBuilder().where(params).getOne();
  }

  async update(id, data): Promise<Location> {
    const oldOne = await this.locationRepository
      .createQueryBuilder()
      .where({ id })
      .getOne();
    if (!oldOne) return null;
    Object.assign(oldOne, data);
    return await this.locationRepository.save(oldOne);
  }

  async delete(id): Promise<any> {
    const result = await this.locationRepository
      .createQueryBuilder()
      .where({ id })
      .delete();
    return result;
  }
}
