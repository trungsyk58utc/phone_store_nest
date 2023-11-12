import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

const dataSourceOption: any = {
  type: 'postgres',
  host: configService.getOrThrow('DB_HOST'),
  port: configService.getOrThrow('DB_PORT'),
  database: configService.getOrThrow('DB_NAME'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  migrations: ['dist/migrations/**'],
  entities: ['dist/entities/*.entity.js'],
  migrationsTableName: 'custom_migration_table',
  autoLoadEntities: true,
};

const dataSource = new DataSource(dataSourceOption);

export default dataSource;
