import { Injectable } from '@nestjs/common';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';
import { UpdateSexualityRequests } from 'src/infra/http/dtos/createSexualityRequests';

@Injectable()
export class UpdateSexualityUseCase {
  constructor(private readonly sexualityRepository: SexualityRepository) {}
  async execute(
    id: string,
    input: UpdateSexualityRequests,
  ): Promise<SexualityDTO> {
    const sexuality = await this.sexualityRepository.findById(id);

    if (!sexuality) {
      throw new Error('Sexualidade não encontrada');
    }

    sexuality.updateDetails({
      title: input.title,
      description: input.description,
    });

    await this.sexualityRepository.update(sexuality);

    return sexuality.toDTO();
  }
}
