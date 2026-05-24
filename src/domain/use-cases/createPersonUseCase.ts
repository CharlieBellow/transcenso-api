import { Injectable } from '@nestjs/common';
import { Pronouns } from 'src/domain/enums/pronouns';
import { Person } from '../entities/person';
import { PersonRepository } from '../repositories/personRepository';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

interface CreatePersonRequest {
  name: string;
  socialName?: string;
  birthDate: Date;
  cpf: string;
  rg: string;
  pronouns: string;
  genderId: string;
  sexualityId: string;
}

@Injectable()
export class CreatePersonUseCase {
  // Injetamos o contrato (abstract class) que você já preparou
  constructor(
    private personRepository: PersonRepository,
    private genderRepository: GenderRepository,
    private sexualityRepository: SexualityRepository,
  ) {}

  async execute(request: CreatePersonRequest) {
    // 1. Regra de Negócio: Verificar se o CPF já está cadastrado
    const personAlreadyExists = await this.personRepository.findByCpf(
      request.cpf,
    );

    const gender = await this.genderRepository.findById(request.genderId);

    const sexuality = await this.sexualityRepository.findById(
      request.sexualityId,
    );

    if (gender || sexuality) {
      throw new Error('Gênero ou Sexualidade não encontrados.');
    }
    if (personAlreadyExists) {
      throw new Error('Uma pessoa com este CPF já está cadastrada.');
    }

    // 2. Criar a Entidade (Aqui as validações da sua classe Person acontecem)
    const person = new Person({
      name: request.name,
      socialName: request.socialName,
      birthDate: request.birthDate,
      cpf: request.cpf,
      rg: request.rg,
      pronouns: request.pronouns as Pronouns,
      genderId: request.genderId,
      sexualityId: request.sexualityId,
      createdAt: new Date(),
      updatedAt: null,
    });

    // 3. Persistência: Mandar o repositório salvar a entidade
    await this.personRepository.create(person);

    // 4. Retornar algo útil (geralmente o DTO)
    return {
      person: person.toDTO({
        gender: gender.toDTO(),
        sexuality: sexuality.toDTO(),
      }),
    };
  }
}
