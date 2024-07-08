import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Door } from './model/door.model';
import { DoorModule } from './components/door/door.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '47.237.78.128',
      port: 8080,
      username: 'user',
      password: 'user',
      database: 'user',
      entities: [Door],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    DoorModule,
  ],
})
export class AppModule {
  constructor() {}
}
