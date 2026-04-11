import { Gender } from 'src/domain/entities/Gender';

export interface GenderRepository {
  create(gender: Gender): Promise<void>;
  findBySlug(slug: string): Promise<Gender | null>;
  findByAcronym(acronym: string): Promise<Gender | null>;
  listAll(): Promise<Gender[]>;
}
