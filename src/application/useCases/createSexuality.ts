import { Sexuality } from 'src/domain/entities/sexuality';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

interface CreateSexualityInput {
  title: string;
  description: string;
  acronym: string;
}

export class CreateSexualityUseCase {
  constructor(
    private sexualityRepository: SexualityRepository,
    private genderRepository: GenderRepository,
  ) {}

  async execute(input: CreateSexualityInput): Promise<SexualityDTO> {
    const alreadyExists = await this.sexualityRepository.findByAcronym(
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
    return sexuality.toDTO();
  }
}
