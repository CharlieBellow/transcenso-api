import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/PrismaService';
import { PrismaPersonRepository } from 'src/infra/database/prisma/repositories/primaPersonRepository';
import { PrismaGenderRepository } from 'src/infra/database/prisma/repositories/prismaGenderRepository';
import { PrismaSexualityRepository } from 'src/infra/database/prisma/repositories/prismaSexualityRepository';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';
import { PersonRepository } from 'src/domain/repositories/personRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: GenderRepository,
      useClass: PrismaGenderRepository,
    },
    {
      provide: SexualityRepository,
      useClass: PrismaSexualityRepository,
    },
    {
      provide: PersonRepository,
      useClass: PrismaPersonRepository,
    },
  ],
  exports: [
    PrismaService,
    GenderRepository,
    SexualityRepository,
    PersonRepository,
  ],
})
export class DatabaseModule {}
