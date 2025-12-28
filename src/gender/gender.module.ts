import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderController } from './gender.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [GenderController],
  providers: [GenderService, PrismaService],
  exports: [GenderService],
})
export class GenderModule {}
