interface AddressProps {
  id?: string;
  street: string;
  number?: string;
  hasNumber: boolean;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
  cellPhone: string;
  email: string;
}

export class Address {
  private props: AddressProps;
  private _id: string;

  constructor(props: AddressProps) {
    this._id = props.id ?? crypto.randomUUID();

    if (props.hasNumber && (!props.number || props.number.trim() === '')) {
      throw new Error(
        'O número é obrigatório quando Sem Número não estiver marcado.',
      );
    }

    if (!props.street || props.street.trim() === '') {
      throw new Error('A rua é obrigatória.');
    }

    if (!props.neighborhood || props.neighborhood.trim() === '') {
      throw new Error('O bairro é obrigatório.');
    }

    if (!props.city || props.city.trim() === '') {
      throw new Error('A cidade é obrigatória.');
    }

    if (!props.state || props.state.trim() === '') {
      throw new Error('O estado é obrigatório.');
    }

    if (!props.zipCode || props.zipCode.trim() === '') {
      throw new Error('O CEP é obrigatório.');
    }

    if (!props.country || props.country.trim() === '') {
      throw new Error('O país é obrigatório.');
    }
  }

  get id() {
    return this._id;
  }

  get street() {
    return this.props.street;
  }

  get number() {
    return this.props.number;
  }

  get hasNumber() {
    return this.props.hasNumber;
  }

  get complement() {
    return this.props.complement;
  }

  get neighborhood() {
    return this.props.neighborhood;
  }

  get city() {
    return this.props.city;
  }

  get state() {
    return this.props.state;
  }
  get zipCode() {
    return this.props.zipCode;
  }
  get country() {
    return this.props.country;
  }
  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }
  get cellPhone() {
    return this.props.cellPhone;
  }
  get email() {
    return this.props.email;
  }

  toDTO(): AddressProps {
    return {
      id: this._id,
      street: this.street,
      number: this.number,
      hasNumber: this.hasNumber,
      complement: this.complement,
      neighborhood: this.neighborhood,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
      country: this.country,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      cellPhone: this.cellPhone,
      email: this.email,
    };
  }
}
