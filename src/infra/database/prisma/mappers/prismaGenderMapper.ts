import { Gender as PrismaGender } from '@prisma/client';
import { Gender } from 'src/domain/entities/gender';

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
    return new Gender(
      {
        title: raw.title,
        acronym: raw.acronym,
        description: raw.description,
        slug: raw.slug,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      raw.id,
    );
  }
}
