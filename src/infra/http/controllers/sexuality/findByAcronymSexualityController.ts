import { Controller, Get, Param } from '@nestjs/common';
import { FindByAcronymSexualityUseCase } from 'src/application/useCases/sexuality/findByAcronymSexualityUseCase';

@Controller('sexualities')
export class FindByAcronymSexualityController {
  constructor(
    private readonly findByAcronymSexualityUseCase: FindByAcronymSexualityUseCase,
  ) {}

  @Get('acronym/:acronym')
  async handle(@Param('acronym') acronym: string) {
    const sexuality = await this.findByAcronymSexualityUseCase.execute(acronym);
    return sexuality;
  }
}
