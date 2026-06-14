import { Injectable } from '@nestjs/common';
import { PersonDTO } from 'src/domain/dtos/personDto';
import { Person } from 'src/domain/entities/person';
import { Pronouns } from 'src/domain/enums/pronouns';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { PersonRepository } from 'src/domain/repositories/personRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

interface CreatePersonInput {
  civilName: string;
  socialName: string;
  slug: string;
  cpf: string;
  rg: string;
  genderId: string;
  sexualityId: string;
  birthDate: Date;
  pronouns: Pronouns;
}

@Injectable()
export class CreatePersonUseCase {
  constructor(
    private personRepository: PersonRepository,
    private genderRepository: GenderRepository,
    private sexualityRepository: SexualityRepository,
  ) {}

  async execute(input: CreatePersonInput): Promise<PersonDTO> {
    const gender = await this.genderRepository.findById(input.genderId);
    const sexuality = await this.sexualityRepository.findById(
      input.sexualityId,
    );

    if (!gender) throw new Error(`Gender not found`);
    if (!sexuality) throw new Error(`Sexuality not found`);
    const existingPersonCpf = await this.personRepository.findByCpf(input.cpf);
    if (existingPersonCpf) {
      throw new Error(`Cpf already exists`);
    }

    const existingPersonRg = await this.personRepository.findByRg(input.rg);
    if (existingPersonRg) {
      throw new Error(`Rg already exists`);
    }

    const existingSlug = await this.personRepository.findBySlug(input.slug);
    if (existingSlug) {
      throw new Error(`Slug already exists`);
    }

    const person = new Person({
      ...input,
      genderId: gender.id,
      sexualityId: sexuality.id,
    });
    await this.personRepository.create(person);

    return person.toDTO({
      gender: gender.toDTO(),
      sexuality: sexuality.toDTO(),
    });
  }
}
