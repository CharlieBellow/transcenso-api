import { Sexuality } from 'src/domain/entities/sexuality';

export interface SexualityRepository {
  create(sexuality: Sexuality): Promise<void>;
  findById(id: string): Promise<Sexuality | null>;
  findBySlug(slug: string): Promise<Sexuality | null>;
  findByAcronym(acronym: string): Promise<Sexuality | null>; // Também precisamos validar aqui!
}
