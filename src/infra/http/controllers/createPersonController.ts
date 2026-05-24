import { Body, Controller, Post } from '@nestjs/common';
import { CreatePersonUseCase } from 'src/domain/use-cases/createPersonUseCase';
import { CreatePersonRequests } from 'src/infra/http/dtos/createPersonRequests';

@Controller('persons')
export class CreatePersonController {
  constructor(private createPersonUseCase: CreatePersonUseCase) {}
  @Post()
  async handle(@Body() input: CreatePersonRequests) {
    const result = await this.createPersonUseCase.execute(input);

    return result;
  }
}
