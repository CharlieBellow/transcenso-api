import { Controller, Get, Param } from '@nestjs/common';
import { FindByIdPersonUseCase } from 'src/application/useCases/person/findByIdPersonUseCase';

@Controller('people')
export class FindByIdPersonController {
  constructor(private readonly findByIdPersonUseCase: FindByIdPersonUseCase) {}

  @Get('id/:id')
  async handle(@Param('id') id: string) {
    const result = await this.findByIdPersonUseCase.execute(id);

    return result;
  }
}
