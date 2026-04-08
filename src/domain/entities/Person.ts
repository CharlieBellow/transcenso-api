
// a interface é para definir o que vamos receber no formulário, ou seja, os dados que vamos usar para criar uma pessoa no banco.
export interface PersonProps {
  id?: string;
  name: string;
  slug?: string;
  socialName: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  pronouns: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Person {
  // encapsulamento: a classe Person tem uma propriedade privada props, que é do tipo PersonProps. Isso significa que só podemos acessar os dados da pessoa através dos métodos da classe, e não diretamente. Significa que ninguém de fora pode chegar e mudar o nome da pessoa sem passar pelas regras da classe.
  private props: PersonProps;
  private _id: string;

  // O constructor:  É o guarda da porta. Quando você der um new Person(...), o código dentro do construtor roda imediatamente.
  constructor(props: PersonProps) {
    this._id = props.id ?? crypto.randomUUID();
    if (!props.name || props.name.trim() === '') {
      throw new Error('O nome é obrigatório.');
    }

    if (props.birthDate > new Date()) {
      throw new Error('A data de nascimento não pode ser no futuro.');
    }

    const generatedSlug = props.name
      .toLowerCase()
      .trim()
      .normalize('NFD') // Remove acentos
      .replace(/[\u0300-\u036f]/g, "") 
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
  
  get name() { 
    return this.props.name;
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



  // Os getters :  Como as propriedades são privadas (private), os getters funcionam como uma janela. Você pode ver o nome (person.name), mas não pode alterá-lo diretamente (person.name = "Outro") sem criar um método específico para isso.
  toDTO(): PersonDTO {
    return {
      id: this._id,
      name: this.name,
      socialName: this.socialName,
      slug: this.slug,
      cpf: this.cpf,
      rg: this.rg,
      birthDate: this.birthDate,
      pronouns: this.pronouns,
    }
  }
}
