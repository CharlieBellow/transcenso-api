import { Module } from '@nestjs/common';
import { SexualityService } from './sexuality.service';
import { SexualityController } from './sexuality.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [SexualityController],
  providers: [SexualityService, PrismaService],
  exports: [SexualityService],
})
export class SexualityModule {}
