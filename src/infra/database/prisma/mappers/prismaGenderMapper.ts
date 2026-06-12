import { Gender } from '../../../../domain/entities/gender';
import { Gender as PrismaGender } from '../../../../generated/prisma/client';

export class PrismaGenderMapper {
  static toPrisma(gender: Gender) {
    return {
      id: gender.id,
      title: gender.title,
      acronym: gender.acronym,
      description: gender.description,
      slug: gender.slug,
      createdAt: gender.createdAt,
      updatedAt: gender.updatedAt,
    };
  }

  static toDomain(raw: PrismaGender): Gender {
    return new Gender({
      id: raw.id,
      title: raw.title,
      acronym: raw.acronym,
      description: raw.description,
      slug: raw.slug,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt ?? undefined,
    });
  }
}
