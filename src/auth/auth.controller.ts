import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() body: Prisma.userCreateInput) {
    return this.authService.signIn(body);
  }
}
