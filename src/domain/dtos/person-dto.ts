import { Pronouns } from 'src/domain/enums/pronouns';

export interface PersonDTO {
  id: string;
  name: string;
  socialName: string;
  slug: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  pronouns: Pronouns;
}
