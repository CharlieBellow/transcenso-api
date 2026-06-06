import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateGenderUseCase } from 'src/application/useCases/gender/updateGenderUseCase';
import { UpdateGenderRequests } from 'src/infra/http/dtos/createGenderRequests';

@Controller('genders')
export class UpdateGendersController {
  constructor(private readonly updateGenderUseCase: UpdateGenderUseCase) {}

  @Put(':id')
  async handle(@Param('id') id: string, @Body() input: UpdateGenderRequests) {
    const gender = await this.updateGenderUseCase.execute(id, input);
    return gender;
  }
}
