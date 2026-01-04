import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/prisma.service';
import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [GenderController],
  providers: [GenderService, PrismaService],
  exports: [GenderService],
})
export class GenderModule {}
