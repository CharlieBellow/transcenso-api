import { Injectable } from '@nestjs/common';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

@Injectable()
export class FindAllSexualityUseCase {
  constructor(private readonly sexualityRepository: SexualityRepository) {}
  async execute(): Promise<SexualityDTO[]> {
    const sexualities = await this.sexualityRepository.listAll();

    return sexualities.map((sexuality) => sexuality.toDTO());
  }
}
