import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteGenderUseCase } from 'src/application/useCases/gender/deleteGenderUseCase';

@Controller('genders')
export class DeleteGenderController {
  constructor(private readonly deleteGenderUseCase: DeleteGenderUseCase) {}
  @Delete(':id')
  async handle(@Param('id') id: string) {
    await this.deleteGenderUseCase.execute(id);

    return 'Deletado com sucesso';
  }
}
