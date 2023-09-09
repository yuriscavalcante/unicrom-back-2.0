import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from './infra/http/http.module';
import { DataBaseModule } from './infra/typeorm/database.module';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, DataBaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
