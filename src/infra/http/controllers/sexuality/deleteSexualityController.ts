import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteSexualityUseCase } from 'src/application/useCases/sexuality/deleteSexualityUseCase';

@Controller('sexualities')
export class DeleteSexualityController {
  constructor(
    private readonly deleteSexualityUseCase: DeleteSexualityUseCase,
  ) {}
  @Delete(':id')
  async handle(@Param('id') id: string) {
    await this.deleteSexualityUseCase.execute(id);

    return 'Deletado com sucesso';
  }
}
