import { GenderDTO } from 'src/domain/dtos/genderDto';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { Pronouns } from 'src/domain/enums/pronouns';

export interface PersonDTO {
  id: string;
  // civilName: string; não é necessário, pois o nome Social deve ser utilizado para identificação da pessoa em todas as telas do sistema, e o nome civil deve ser utilizado apenas para fins jurídicos, de registro e documentação.
  socialName: string;
  slug: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  gender: GenderDTO;
  sexuality: SexualityDTO;
  pronouns: Pronouns;
}
