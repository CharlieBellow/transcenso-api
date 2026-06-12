import { Controller, Get } from '@nestjs/common';
import { FindAllSexualityUseCase } from 'src/application/useCases/sexuality/findAllSexualityUseCase';

@Controller('sexualities')
export class FindAllSexualityController {
  constructor(
    private readonly findAllSexualityUseCase: FindAllSexualityUseCase,
  ) {}

  @Get()
  async handle() {
    const result = await this.findAllSexualityUseCase.execute();

    return result;
  }
}
