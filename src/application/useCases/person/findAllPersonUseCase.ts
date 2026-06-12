import { Injectable } from '@nestjs/common';
import { PersonDTO } from 'src/domain/dtos/personDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { PersonRepository } from 'src/domain/repositories/personRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

@Injectable()
export class FindAllPersonUseCase {
  constructor(
    private readonly personRepository: PersonRepository,
    private readonly genderRepository: GenderRepository,
    private readonly sexualityRepository: SexualityRepository,
  ) {}
  async execute(): Promise<PersonDTO[]> {
    const people = await this.personRepository.listAll();

    const peopleDTOs = await Promise.all(
      people.map(async (person) => {
        const genderEntity = await this.genderRepository.findById(
          person.genderId,
        );
        const sexualityEntity = await this.sexualityRepository.findById(
          person.sexualityId,
        );

        if (!genderEntity || !sexualityEntity) {
          throw new Error(
            `Relações não encontradas para a pessoa: ${person.id}`,
          );
        }

        return person.toDTO({
          gender: genderEntity.toDTO(),
          sexuality: sexualityEntity.toDTO(),
        });
      }),
    );
    return peopleDTOs;
  }
}
