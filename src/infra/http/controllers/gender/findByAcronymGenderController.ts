import { Controller, Get, Param } from '@nestjs/common';
import { FindByAcronymGenderUseCase } from 'src/application/useCases/gender/findByAcronymGenderUseCase';

@Controller('genders')
export class FindByAcronymGenderController {
  constructor(
    private readonly findByAcronymGenderUseCase: FindByAcronymGenderUseCase,
  ) {}
  /* tem que colocar um nome fixo antes porque vai buscar por id, acronum e acronym, se não ele vai se perder e não vai saber qual rota buscar. */
  @Get('acronym/:acronym')
  async handle(@Param('acronym') slug: string) {
    const gender = await this.findByAcronymGenderUseCase.execute(slug);

    return gender;
  }
}
