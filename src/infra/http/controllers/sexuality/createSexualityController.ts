import { Body, Controller, Post } from '@nestjs/common';
import { CreateSexualityUseCase } from 'src/application/useCases/sexuality/createSexualityUseCase';

import { CreateSexualityRequests } from 'src/infra/http/dtos/createSexualityRequests';

@Controller('sexualities')
export class CreateSexualityController {
  constructor(
    private readonly createSexualityUseCase: CreateSexualityUseCase,
  ) {}

  @Post()
  async handle(@Body() input: CreateSexualityRequests) {
    const result = await this.createSexualityUseCase.execute(input);
    return result;
  }
}
