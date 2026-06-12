import { Injectable } from '@nestjs/common';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

@Injectable()
export class FindByAcronymSexualityUseCase {
  constructor(private readonly sexualityRepository: SexualityRepository) {}

  async execute(acronym: string): Promise<SexualityDTO> {
    const sexuality = await this.sexualityRepository.findByAcronym(acronym);

    if (!sexuality) {
      throw new Error(`Sexualidade com acrônimo "${acronym}" não encontrada.`);
    }

    return sexuality.toDTO();
  }
}
