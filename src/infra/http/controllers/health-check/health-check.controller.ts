import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('health-check')
export class HealthCheckController {
  @Get()
  async healthCheck(@Res() res: Response) {
    return res.status(200).json({ message: 'OK' });
  }
}
