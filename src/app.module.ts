import { Module, ValidationPipe } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { GenderModule } from './gender/gender.module';
import { PersonModule } from './person/person.module';
import { SexualityModule } from './sexuality/sexuality.module';
import { UserModule } from './user/user.module';
import { APP_PIPE } from '@nestjs/core';


@Module({
  imports: [
    AuthModule,
    UserModule,
    DatabaseModule,
    PersonModule,
    GenderModule,
    SexualityModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
