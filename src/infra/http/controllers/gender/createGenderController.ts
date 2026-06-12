import { Body, Controller, Post } from '@nestjs/common';
import { CreateGenderUseCase } from 'src/application/useCases/gender/createGenderUseCase';
import { CreateGenderRequests } from 'src/infra/http/dtos/createGenderRequests';

@Controller('genders')
export class CreateGenderController {
  constructor(private readonly createGenderUseCase: CreateGenderUseCase) {}

  @Post()
  async handle(@Body() input: CreateGenderRequests) {
    const result = await this.createGenderUseCase.execute(input);

    return result;
  }
}
