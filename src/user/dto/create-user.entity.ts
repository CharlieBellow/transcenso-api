import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Digite um Email inválido.' })
  @IsNotEmpty()
  email: string;

  @MinLength(6, {
    message: 'Senha muito curta. Tamanho mínimo de 6 caracteres.',
  })
  @MaxLength(50, {
    message: 'Senha muito longa. Tamanho máximo de 50 caracteres.',
  })
  @IsAlphanumeric('pt-BR')
  @IsNotEmpty({ message: 'Senha não pode ser vazia.' })
  password: string;

  @Length(3, 50, {
    message:
      'O Nome deve ter um tamanho mínimo de 3 caracteres e máximo de 50.',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID('6', { message: 'ID da pessoa inválido.' })
  @IsOptional()
  personId: string;
}
