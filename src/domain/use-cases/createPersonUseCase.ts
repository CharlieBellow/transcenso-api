import { Injectable } from '@nestjs/common';
import { Person } from '../entities/person';
import { PersonRepository } from '../repositories/personRepository';
import { Pronouns } from 'src/domain/enums/pronouns';

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
  constructor(private personRepository: PersonRepository) {}

  async execute(request: CreatePersonRequest) {
    // 1. Regra de Negócio: Verificar se o CPF já está cadastrado
    const personAlreadyExists = await this.personRepository.findByCpf(
      request.cpf,
    );

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
      person: person.toDTO(),
    };
  }
}
