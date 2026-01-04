import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePersonDto {
  /* Dados mais importantes */
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
  birthDate: string;

  /* dados intermediários */
  @IsNotEmpty()
  genderId: string;

  @IsNotEmpty()
  sexualityId: string;

  // opcionais
  @IsUUID('6', { message: 'ID da pessoa inválido.' })
  @IsOptional()
  userId: string;
}
