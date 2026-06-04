import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePersonUseCase } from 'src/domain/use-cases/createPersonUseCase';
import { PrismaService } from 'src/infra/database/prisma/PrismaService';

import { CreatePersonRequests } from 'src/infra/http/dtos/createPersonRequests';

@Controller('persons')
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

  @Get('/seed-teste')
  async seed() {
    // 1. Cria a sexualidade direto usando o seu serviço que funciona
    const sexuality = await this.prisma.sexuality.upsert({
      where: { acronym: 'BIS' },
      update: {},
      create: {
        id: 'a1b0c442-98fc-11ee-b9d1-0242ac120004',
        title: 'Bissexual',
        acronym: 'BIS',
        slug: 'bissexual',
        description: 'Atração por múltiplos gêneros.',
      },
    });

    // 2. Cria o gênero
    const gender = await this.prisma.gender.upsert({
      where: { slug: 'homem-trans' },
      update: {},
      create: {
        id: 'e3b0c442-98fc-11ee-b9d1-0242ac120002',
        title: 'Homem Trans',
        acronym: 'HTR',
        slug: 'homem-trans',
        description: 'Identidade masculina.',
      },
    });

    return {
      message: 'Banco populado com sucesso!',
      genderId: gender.id,
      sexualityId: sexuality.id,
    };
  }
}
