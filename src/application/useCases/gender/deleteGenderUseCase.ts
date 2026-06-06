import { Injectable } from '@nestjs/common';
import { GenderRepository } from 'src/domain/repositories/genderRepository';

@Injectable()
export class DeleteGenderUseCase {
  constructor(private readonly genderRepository: GenderRepository) {}
  async execute(id: string): Promise<void> {
    await this.genderRepository.delete(id);
  }
}
