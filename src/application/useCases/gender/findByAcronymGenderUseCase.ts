import { Injectable } from '@nestjs/common';
import { GenderDTO } from 'src/domain/dtos/genderDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';

@Injectable()
export class FindByAcronymGenderUseCase {
  constructor(private readonly genderRepository: GenderRepository) {}
  async execute(acronym: string): Promise<GenderDTO> {
    const gender = await this.genderRepository.findByAcronym(acronym);
    if (!gender) {
      throw new Error('Gênero não encontrado');
    }
    return gender.toDTO();
  }
}
