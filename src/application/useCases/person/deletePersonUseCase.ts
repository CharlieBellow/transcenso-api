import { Injectable } from '@nestjs/common';
import { PersonRepository } from 'src/domain/repositories/personRepository';

@Injectable()
export class DeletePersonUseCase {
  constructor(private readonly personRepository: PersonRepository) {}
  async execute(id: string): Promise<void> {
    await this.personRepository.delete(id);
  }
}
