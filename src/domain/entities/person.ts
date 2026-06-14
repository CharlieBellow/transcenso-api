import { GenderDTO } from 'src/domain/dtos/genderDto';
import { PersonDTO } from 'src/domain/dtos/personDto';
import { SexualityDTO } from 'src/domain/dtos/sexualityDto';
import { Pronouns } from 'src/domain/enums/pronouns';

// a interface é para definir o que vamos receber no formulário, ou seja, os dados que vamos usar para criar uma pessoa no banco.
export interface PersonProps {
  id?: string;
  civilName: string;
  slug?: string;
  genderId: string;
  sexualityId: string;
  socialName: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  pronouns: Pronouns;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Person {
  // encapsulamento: a classe Person tem uma propriedade privada props, que é do tipo PersonProps. Isso significa que só podemos acessar os dados da pessoa através dos métodos da classe, e não diretamente. Significa que ninguém de fora pode chegar e mudar o nome da pessoa sem passar pelas regras da classe.
  private props: PersonProps;
  private _id: string;

  // O constructor:  É o guarda da porta. Quando você der um new Person(...), o código dentro do construtor roda imediatamente.
  constructor(props: PersonProps) {
    this._id = props.id ?? crypto.randomUUID();
    if (!props.civilName || props.civilName.trim() === '') {
      throw new Error('O nome civil é obrigatório.');
    }

    if (props.birthDate > new Date()) {
      throw new Error('A data de nascimento não pode ser no futuro.');
    }

    const generatedSlug = props.civilName
      .toLowerCase()
      .trim()
      .normalize('NFD') // Remove acentos
      .replace(/[\u0300-\u036f]/g, '') // Remove caracteres de acentos"")
      .replace(/\s+/g, '-');

    this.props = {
      ...props,
      slug: props.slug ?? generatedSlug,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }
  get civilName() {
    return this.props.civilName;
  }

  get socialName() {
    return this.props.socialName;
  }

  get slug() {
    return this.props.slug;
  }

  get cpf() {
    return this.props.cpf;
  }

  get rg() {
    return this.props.rg;
  }

  get birthDate() {
    return this.props.birthDate;
  }

  get pronouns() {
    return this.props.pronouns;
  }
  get genderId() {
    return this.props.genderId;
  }
  get sexualityId() {
    return this.props.sexualityId;
  }

  public updateDetails(props: {
    civilName: string;
    socialName?: string;
    genderId: string;
    sexualityId: string;
  }) {
    this.props.civilName = props.civilName;
    this.props.socialName = props.socialName;
    this.props.genderId = props.genderId;
    this.props.sexualityId = props.sexualityId;
    this.props.updatedAt = new Date(); // O Domínio dita a alteração
  }

  // Os getters :  Como as propriedades são privadas (private), os getters funcionam como uma janela. Você pode ver o nome (person.civilName), mas não pode alterá-lo diretamente (person.civilName = "Outro") sem criar um método específico para isso.

  public toDTO(relations: {
    gender: GenderDTO;
    sexuality: SexualityDTO;
  }): PersonDTO {
    return {
      id: this._id,
      // civilName: this.civilName, não é necessário, pois o nome Social deve ser utilizado para identificação da pessoa em todas as telas do sistema, e o nome civil deve ser utilizado apenas para fins jurídicos, de registro e documentação.
      socialName: this.socialName || this.civilName,
      slug: this.slug,
      cpf: this.cpf,
      rg: this.rg,
      birthDate: this.birthDate,
      pronouns: this.props.pronouns,
      gender: relations.gender,
      sexuality: relations.sexuality,
    };
  }

  // Se um dia o módulo administrativo precisar do nome civil estrito:
  public getCivilNameForLegalPurposes(): string {
    return this.civilName;
  }
}
