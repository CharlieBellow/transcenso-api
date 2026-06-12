import { Injectable } from '@nestjs/common';
import { GenderDTO } from 'src/domain/dtos/genderDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';

@Injectable()
export class FindBySlugGenderUseCase {
  constructor(private readonly genderRepository: GenderRepository) {}
  async execute(slug: string): Promise<GenderDTO> {
    const gender = await this.genderRepository.findBySlug(slug);
    if (!gender) {
      throw new Error('Gênero não encontrado');
    }
    return gender.toDTO();
  }
}
