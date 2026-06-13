import { Body, Controller, Post } from '@nestjs/common';
import { CreatePersonUseCase } from 'src/application/useCases/person/createPersonUseCase';

import { PrismaService } from 'src/infra/database/prisma/PrismaService';

import { CreatePersonRequests } from 'src/infra/http/dtos/createPersonRequests';

@Controller('people')
export class CreatePersonController {
  constructor(
    private createPersonUseCase: CreatePersonUseCase,
    private prisma: PrismaService,
  ) {}
  @Post()
  async handle(@Body() input: CreatePersonRequests) {
    const result = await this.createPersonUseCase.execute(input);

    return result;
  }
}
