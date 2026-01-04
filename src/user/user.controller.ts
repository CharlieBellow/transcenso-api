import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { user as UserModel } from 'generated/prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.entity';
import { UpdateUserDto } from 'src/user/dto/update-user.entity';
import { UserService } from 'src/user/user.service';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async signupUser(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<Omit<UserModel, 'password'>> {
    return this.userService.user({ id });
  }
  @UseGuards(AuthGuard)
  @Get()
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body(new ValidationPipe()) userData: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.updateUser({ where: { id }, data: userData });
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id });
  }
}
