import { Sexuality } from 'src/domain/entities/Sexuality';

export interface SexualityRepository {
  create(sexuality: Sexuality): Promise<void>;
  findByAcronym(acronym: string): Promise<Sexuality | null>; // Também precisamos validar aqui!
}
