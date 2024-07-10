import { Door } from '@/model/door.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoorService {
  constructor(
    @InjectRepository(Door) private readonly doorRepository: Repository<Door>,
  ) {}

  async create(data): Promise<Door[]> {
    const newOne = this.doorRepository.create(data);
    return await this.doorRepository.save(newOne);
  }

  async find(params): Promise<Door[]> {
    return this.doorRepository.createQueryBuilder().where(params).getMany();
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
