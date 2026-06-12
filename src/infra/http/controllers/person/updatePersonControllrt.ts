import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdatePersonUseCase } from 'src/application/useCases/person/updatePersonUseCase';
import { UpdatePersonRequests } from 'src/infra/http/dtos/createPersonRequests';

@Controller('people')
export class UpdatePersonController {
  constructor(private readonly updatePersonUseCase: UpdatePersonUseCase) {}
  @Put(':id')
  async handle(@Param('id') id: string, @Body() input: UpdatePersonRequests) {
    const person = await this.updatePersonUseCase.execute(id, input);
    return person;
  }
}
