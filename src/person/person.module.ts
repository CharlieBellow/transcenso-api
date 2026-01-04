import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaService } from 'src/database/prisma.service';
import { UserService } from 'src/user/user.service';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [PersonController],
  providers: [PersonService, PrismaService, UserService],
  exports: [PersonService],
})
export class PersonModule {}
