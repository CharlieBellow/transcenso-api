import { Injectable } from '@nestjs/common';
import { PersonDTO } from 'src/domain/dtos/personDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { PersonRepository } from 'src/domain/repositories/personRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

@Injectable()
export class FindByCpfPersonUseCase {
  constructor(
    private readonly personRepository: PersonRepository,
    private readonly genderRepository: GenderRepository,
    private readonly sexualityRepository: SexualityRepository,
  ) {}
  async execute(cpf: string): Promise<PersonDTO> {
    const person = await this.personRepository.findByCpf(cpf);

    if (!person) {
      throw new Error(`Pessoa com CPF "${cpf}" não encontrada.`);
    }
    const gender = await this.genderRepository.findById(person.genderId);
    const sexuality = await this.sexualityRepository.findById(
      person.sexualityId,
    );

    if (!gender || !sexuality) {
      throw new Error(
        `Relacionamentos de Gênero ou Sexualidade não encontrados para esta pessoa.`,
      );
    }

    return person.toDTO({
      gender: gender.toDTO(),
      sexuality: sexuality.toDTO(),
    });
  }
}
