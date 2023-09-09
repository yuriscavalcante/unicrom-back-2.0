import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

const typeormConfigs: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  entities: ['dist/application/*/entities/*{.ts,.js}'],
  migrations: ['dist/infra/database/typeorm/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};

export { typeormConfigs };
