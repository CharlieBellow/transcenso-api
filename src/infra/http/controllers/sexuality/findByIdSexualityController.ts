import { Controller, Get, Param } from '@nestjs/common';
import { FindByIdSexualityUseCase } from 'src/application/useCases/sexuality/findByIdSexualityUseCase';

@Controller('sexualities')
export class FindByIdSexualityController {
  constructor(
    private readonly findByIdSexualityUseCase: FindByIdSexualityUseCase,
  ) {}

  @Get('id/:id')
  async handle(@Param('id') id: string) {
    const sexuality = await this.findByIdSexualityUseCase.execute(id);
    return sexuality;
  }
}
