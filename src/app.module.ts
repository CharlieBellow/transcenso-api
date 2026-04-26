import { Module, ValidationPipe } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';

import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
