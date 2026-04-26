import { GenderDTO } from 'src/domain/dtos/genderDto';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { Pronouns } from 'src/domain/enums/pronouns';

export interface PersonDTO {
  id: string;
  name: string;
  socialName: string;
  slug: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  gender: GenderDTO;
  sexuality: SexualityDTO;
  pronouns: Pronouns;
}
