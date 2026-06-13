import { Pronouns } from 'src/domain/enums/pronouns';

export interface CreatePersonRequests {
  name: string;
  socialName: string;
  birthDate: Date;
  cpf: string;
  rg: string;
  slug: string;
  pronouns: Pronouns;
  genderId: string;
  sexualityId: string;
}

export type UpdatePersonRequests = Partial<CreatePersonRequests>;
