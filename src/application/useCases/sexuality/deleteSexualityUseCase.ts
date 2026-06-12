import { Injectable } from '@nestjs/common';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

@Injectable()
export class DeleteSexualityUseCase {
  constructor(private readonly sexualityRepository: SexualityRepository) {}
  async execute(id: string): Promise<void> {
    await this.sexualityRepository.delete(id);
  }
}
