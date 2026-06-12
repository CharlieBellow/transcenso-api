import { Controller, Delete, Param } from '@nestjs/common';
import { DeletePersonUseCase } from 'src/application/useCases/person/deletePersonUseCase';

@Controller('people')
export class DeletePersonController {
  constructor(private readonly deletePersonUseCase: DeletePersonUseCase) {}

  @Delete(':id')
  async handle(@Param('id') id: string) {
    await this.deletePersonUseCase.execute(id);

    return 'Deletado com sucesso';
  }
}
