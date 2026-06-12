import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateSexualityUseCase } from 'src/application/useCases/sexuality/updateSexualityUseCase';
import { UpdateSexualityRequests } from 'src/infra/http/dtos/createSexualityRequests';

@Controller('sexualities')
export class UpdateSexualityController {
  constructor(
    private readonly updateSexualityUseCase: UpdateSexualityUseCase,
  ) {}
  @Put(':id')
  async handle(
    @Param('id') id: string,
    @Body() input: UpdateSexualityRequests,
  ) {
    const sexuality = await this.updateSexualityUseCase.execute(id, input);
    return sexuality;
  }
}
