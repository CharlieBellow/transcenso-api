import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET || '',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  // só pode exportar o que for provider (injetável)
  providers: [AuthService, AuthGuard],
  exports: [AuthGuard, AuthService],
})
export class AuthModule {}
