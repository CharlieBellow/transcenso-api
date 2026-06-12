import { Controller, Get, Param } from '@nestjs/common';
import { FindBySlugGenderUseCase } from 'src/application/useCases/gender/findBySlugGenderUseCase';

@Controller('genders')
export class FindBySlugGenderController {
  constructor(
    private readonly findBySlugGenderUseCase: FindBySlugGenderUseCase,
  ) {}
  /* tem que colocar um nome fixo antes porque vai buscar por id, acronum e slug, se não ele vai se perder e não vai saber qual rota buscar. */
  @Get('slug/:slug')
  async handle(@Param('slug') slug: string) {
    const gender = await this.findBySlugGenderUseCase.execute(slug);

    return gender;
  }
}
