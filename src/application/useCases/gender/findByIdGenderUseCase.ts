import { Injectable } from '@nestjs/common';
import { GenderDTO } from 'src/domain/dtos/genderDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';

@Injectable()
export class FindByIdGenderUseCase {
  constructor(private readonly genderRepository: GenderRepository) {}
  async execute(id: string): Promise<GenderDTO> {
    const gender = await this.genderRepository.findById(id);
    if (!gender) {
      throw new Error('Gênero não encontrado');
    }
    return gender.toDTO();
  }
}
