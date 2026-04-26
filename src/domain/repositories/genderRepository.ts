import { Gender } from 'src/domain/entities/gender';

export interface GenderRepository {
  create(gender: Gender): Promise<void>;
  findById(id: string): Promise<Gender | null>;
  findBySlug(slug: string): Promise<Gender | null>;
  findByAcronym(acronym: string): Promise<Gender | null>;
  listAll(): Promise<Gender[]>;
}
