import { Gender } from 'src/domain/entities/gender';
import { GenderDTO } from '../../domain/dtos/genderDto';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';

// 1. O Contrato de entrada (O que o formulário do Front vai enviar)
interface CreateGenderInput {
  title: string;
  acronym: string;
  description: string;
}

export class CreateGenderUseCase {
  // 2. O Use Case recebe o repositório pelo construtor (Injeção de Dependência)
  constructor(
    private genderRepository: GenderRepository,
    private sexualityRepository: SexualityRepository,
  ) {}

  // 3. O método principal que executa a ação
  async execute(input: CreateGenderInput): Promise<GenderDTO> {
    // REGRA DE NEGÓCIO: Não permitir siglas duplicadas
    const alreadyExists = await this.genderRepository.findByAcronym(
      input.acronym,
    );

    const existsInSexuality = await this.sexualityRepository.findByAcronym(
      input.acronym,
    );

    if (alreadyExists || existsInSexuality) {
      throw new Error(`A sigla "${input.acronym}" já está cadastrada.`);
    }

    // 4. Criar a instância da Entidade (onde as validações internas rodam)
    const gender = new Gender({
      title: input.title,
      acronym: input.acronym,
      description: input.description,
      createdAt: new Date(),
      updatedAt: null,
    });

    // 5. Mandar o "porteiro" salvar no banco de dados
    await this.genderRepository.create(gender);

    // 6. Retornar o DTO (os dados prontos para o Front exibir)
    return gender.toDTO();
  }
}
