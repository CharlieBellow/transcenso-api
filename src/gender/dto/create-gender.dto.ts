import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateGenderDto {
  @MinLength(3, {
    message: 'Nome muito curto. Tamanho mínimo de 3 caracteres.',
  })
  @MaxLength(50, {
    message: 'Nome muito longo. Tamanho máximo de 50 caracteres.',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Matches(/^[A-Z]{1,3}$/, {
    message: 'Sigla inválida. Deve conter de 1 a 3 letras maiúsculas.',
  })
  acronym: string;
}
