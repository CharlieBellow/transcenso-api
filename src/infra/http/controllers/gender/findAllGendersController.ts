import { Controller, Get } from '@nestjs/common';
import { FindAllGendersUseCase } from 'src/application/useCases/gender/findAllGendersUseCase';

@Controller('genders')
export class FindAllGendersController {
  constructor(private readonly findAllGendersUseCase: FindAllGendersUseCase) {}

  @Get()
  async handle() {
    const genders = await this.findAllGendersUseCase.execute();

    return genders;
  }
}
