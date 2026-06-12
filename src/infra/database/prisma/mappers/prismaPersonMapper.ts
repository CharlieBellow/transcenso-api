import { Person } from '../../../../domain/entities/person';
import { Pronouns } from '../../../../domain/enums/pronouns';
import {
  Gender as PrismaGender,
  Person as PrismaPerson,
  Sexuality as PrismaSexuality,
} from '../../../../generated/prisma/client';

type PrismaPersonWithRelations = PrismaPerson & {
  gender?: PrismaGender;
  sexuality?: PrismaSexuality;
};

export class PrismaPersonMapper {
  static toPrisma(person: Person) {
    return {
      id: person.id,
      name: person.name,
      socialName: person.socialName,
      birthDate: person.birthDate,
      cpf: person.cpf,
      rg: person.rg,
      pronouns: person.pronouns,
      slug: person.slug,
      genderId: person.genderId,
      sexualityId: person.sexualityId,
    };
  }

  static toDomain(raw: PrismaPersonWithRelations): Person {
    return new Person({
      id: raw.id,
      name: raw.name,
      socialName: raw.socialName,
      birthDate: raw.birthDate,
      cpf: raw.cpf,
      rg: raw.rg,
      pronouns: raw.pronouns as Pronouns,
      slug: raw.slug,
      genderId: raw.genderId,
      sexualityId: raw.sexualityId,
    });
  }
}
