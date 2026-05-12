import { Sexuality } from 'src/domain/entities/sexuality';

export abstract class SexualityRepository {
  abstract create(sexuality: Sexuality): Promise<void>;
  abstract findById(id: string): Promise<Sexuality | null>;
  abstract findBySlug(slug: string): Promise<Sexuality | null>;
  abstract findByAcronym(acronym: string): Promise<Sexuality | null>;
}
