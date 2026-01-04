import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/prisma.service';
import { SexualityController } from './sexuality.controller';
import { SexualityService } from './sexuality.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [SexualityController],
  providers: [SexualityService, PrismaService],
  exports: [SexualityService],
})
export class SexualityModule {}
