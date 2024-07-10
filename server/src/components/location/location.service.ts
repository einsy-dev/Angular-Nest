import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '@/model/location.model';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async create(location): Promise<Location[]> {
    const newlocation = this.locationRepository.create(location);
    return await this.locationRepository.save(newlocation);
  }

  async find(params?: any): Promise<Location[]> {
    return this.locationRepository.createQueryBuilder().where(params).getMany();
  }

  async findOne(params: any): Promise<Location> {
    return this.locationRepository.createQueryBuilder().where(params).getOne();
  }

  async update({ id, ...data }: Location): Promise<Location> {
    const oldlocation = await this.locationRepository
      .createQueryBuilder()
      .where({ id })
      .getOne();
    if (!oldlocation) return null;
    Object.assign(oldlocation, data);
    return await this.locationRepository.save(oldlocation);
  }

  async delete(id: string): Promise<any> {
    const result = await this.locationRepository
      .createQueryBuilder()
      .where({ id })
      .delete();
    return result;
  }
}
