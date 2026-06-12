import { Controller, Get } from '@nestjs/common';
import { FindAllPersonUseCase } from 'src/application/useCases/person/findAllPersonUseCase';

@Controller('people')
export class FindAllPersonController {
  constructor(private readonly findAllPersonUseCase: FindAllPersonUseCase) {}

  @Get()
  async handle() {
    const result = await this.findAllPersonUseCase.execute();

    return result;
  }
}
