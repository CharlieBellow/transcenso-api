import { Injectable } from '@nestjs/common';
import { GenderDTO } from 'src/domain/dtos/genderDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { UpdateGenderRequests } from 'src/infra/http/dtos/createGenderRequests';

@Injectable()
export class UpdateGenderUseCase {
  constructor(private readonly genderRepository: GenderRepository) {}

  async execute(id: string, input: UpdateGenderRequests): Promise<GenderDTO> {
    const gender = await this.genderRepository.findById(id);
    if (!gender) {
      throw new Error('Gênero não encontrado');
    }
    gender.updateDetails({
      title: input.title,
      description: input.description,
    });
    await this.genderRepository.update(gender);

    return gender.toDTO();
  }
}
