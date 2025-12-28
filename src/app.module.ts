import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';
import { GenderModule } from './gender/gender.module';
import { SexualityModule } from './sexuality/sexuality.module';

@Module({
  imports: [AuthModule, UserModule, DatabaseModule, PersonModule, GenderModule, SexualityModule],
})
export class AppModule {}
