import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly User: Repository<User>,
  ) {}
  async getHello(): Promise<User[]> {
    await this.User.save({ firstName: 'test' });
    return await this.User.find();
  }
}
