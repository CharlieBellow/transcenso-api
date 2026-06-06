import { Controller, Get, Param } from '@nestjs/common';
import { FindByIdGenderUseCase } from 'src/application/useCases/gender/findByIdGenderUseCase';

@Controller('genders')
export class FindByIdGenderController {
  constructor(private readonly findByIdGenderUseCase: FindByIdGenderUseCase) {}
  /* tem que colocar um nome fixo antes porque vai buscar por id, acronum e slug, se não ele vai se perder e não vai saber qual rota buscar. */
  @Get('id/:id')
  async handle(@Param('id') id: string) {
    const gender = await this.findByIdGenderUseCase.execute(id);

    return gender;
  }
}
