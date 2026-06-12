import { Injectable } from '@nestjs/common';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

@Injectable()
export class FindByIdSexualityUseCase {
  constructor(private readonly sexualityRepository: SexualityRepository) {}

  async execute(id: string): Promise<SexualityDTO> {
    const sexuality = await this.sexualityRepository.findById(id);

    if (!sexuality) {
      throw new Error(`Sexualidade com ID "${id}" não encontrada.`);
    }

    return sexuality.toDTO();
  }
}
