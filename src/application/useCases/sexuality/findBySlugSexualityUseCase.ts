import { Injectable } from '@nestjs/common';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

@Injectable()
export class FindBySlugSexualityUseCase {
  constructor(private readonly sexualityRepository: SexualityRepository) {}

  async execute(slug: string): Promise<SexualityDTO> {
    const sexuality = await this.sexualityRepository.findBySlug(slug);

    if (!sexuality) {
      throw new Error(`Sexualidade com slug "${slug}" não encontrada.`);
    }

    return sexuality.toDTO();
  }
}
