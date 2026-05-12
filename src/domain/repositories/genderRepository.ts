import { Gender } from 'src/domain/entities/gender';

export abstract class GenderRepository {
  abstract create(gender: Gender): Promise<void>;
  abstract findById(id: string): Promise<Gender | null>;
  abstract findBySlug(slug: string): Promise<Gender | null>;
  abstract findByAcronym(acronym: string): Promise<Gender | null>;
  abstract listAll(): Promise<Gender[]>;
}
