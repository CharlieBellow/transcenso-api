import { Injectable } from '@nestjs/common';
import { PersonDTO } from 'src/domain/dtos/personDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { PersonRepository } from 'src/domain/repositories/personRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';
import { UpdatePersonRequests } from 'src/infra/http/dtos/createPersonRequests';

@Injectable()
export class UpdatePersonUseCase {
  constructor(
    private readonly personRepository: PersonRepository,
    private readonly genderRepository: GenderRepository,
    private readonly sexualityRepository: SexualityRepository,
  ) {}

  async execute(id: string, input: UpdatePersonRequests): Promise<PersonDTO> {
    const person = await this.personRepository.findById(id);
    if (!person) {
      throw new Error('Pessoa não encontrada');
    }

    const genderExistis = await this.genderRepository.findById(input.genderId);
    if (!genderExistis) {
      throw new Error('Gênero não encontrado');
    }

    const sexualityExists = await this.sexualityRepository.findById(
      input.sexualityId,
    );
    if (!sexualityExists) {
      throw new Error('Sexualidade não encontrada');
    }

    person.updateDetails({
      civilName: input.civilName,
      socialName: input.socialName,
      genderId: input.genderId,
      sexualityId: input.sexualityId,
    });

    await this.personRepository.update(person);

    return person.toDTO({
      gender: genderExistis.toDTO(),
      sexuality: sexualityExists.toDTO(),
    });
  }
}
