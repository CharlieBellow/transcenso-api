import { Body, Controller, Post } from '@nestjs/common';
import { CreateSexualityUseCase } from 'src/application/useCases/createSexuality';
import { CreateSexualityRequests } from 'src/infra/http/dtos/createSexualityRequests';

@Controller('sexualities')
export class CreateSexualityController {
  constructor(
    private readonly createSexualityUseCase: CreateSexualityUseCase,
  ) {}

  @Post()
  async handleCreate(@Body() input: CreateSexualityRequests) {
    const result = await this.createSexualityUseCase.execute(input);

    return result;
  }
}
