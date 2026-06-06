import { Injectable } from '@nestjs/common';
import { GenderDTO } from 'src/domain/dtos/genderDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';

@Injectable()
export class FindAllGendersUseCase {
  constructor(private readonly genderRepository: GenderRepository) {}
  async execute(): Promise<GenderDTO[]> {
    const genders = await this.genderRepository.listAll();

    return genders.map((gender) => gender.toDTO());
  }
}
