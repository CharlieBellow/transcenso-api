import { Sexuality } from '../../../../domain/entities/sexuality';
import { Sexuality as PrismaSexuality } from '../../../../generated/prisma/client';

export class PrismaSexualityMapper {
  static toPrisma(sexuality: Sexuality) {
    return {
      id: sexuality.id,
      title: sexuality.title,
      acronym: sexuality.acronym,
      description: sexuality.description,
      slug: sexuality.slug,
      createdAt: sexuality.createdAt,
      updatedAt: sexuality.updatedAt,
    };
  }

  static toDomain(raw: PrismaSexuality): Sexuality {
    return new Sexuality({
      id: raw.id,
      title: raw.title,
      acronym: raw.acronym,
      description: raw.description ?? '',
      slug: raw.slug,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt ?? undefined,
    });
  }
}
