import { Injectable } from '@nestjs/common';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { Sexuality } from 'src/domain/entities/sexuality';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

interface CreateSexualityInput {
  title: string;
  acronym: string;
  description: string;
}

@Injectable()
export class CreateSexualityUseCase {
  constructor(
    private readonly sexualityRepository: SexualityRepository,
    private readonly genderRepository: GenderRepository,
  ) {}

  async execute(input: CreateSexualityInput): Promise<SexualityDTO> {
    const alreadyExists = await this.genderRepository.findByAcronym(
      input.acronym,
    );

    const existsInGender = await this.genderRepository.findByAcronym(
      input.acronym,
    );

    if (alreadyExists || existsInGender) {
      throw new Error(`A sigla "${input.acronym}" já está cadastrada.`);
    }

    const sexuality = new Sexuality({
      title: input.title,
      acronym: input.acronym,
      description: input.description,
      createdAt: new Date(),
      updatedAt: null,
    });

    await this.sexualityRepository.create(sexuality);

    // 6. Retornar o DTO (os dados prontos para o Front exibir)
    return sexuality.toDTO();
  }
}
