import { Module } from '@nestjs/common';
import { DataBaseModule } from '../typeorm/database.module';
import { HealthCheckController } from './controllers/health-check/health-check.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [
    // Insert the controllers here
    HealthCheckController,
  ],
  providers: [
    // insert the useCases here
  ],
})
export class HttpModule {}
