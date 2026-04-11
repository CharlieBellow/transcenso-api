import { UserDTO } from 'src/domain/dtos/user-dto';

interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private props: UserProps;
  private _id: string;

  constructor(props: UserProps) {
    this._id = props.id ?? crypto.randomUUID();
    if (!props.name || props.name.trim() === '') {
      throw new Error('O nome é obrigatório.');
    }
    if (!props.email || props.email.trim() === '') {
      throw new Error('O email é obrigatório.');
    }
    if (!props.password || props.password.trim() === '') {
      throw new Error('A senha é obrigatória.');
    }

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  toDTO(): UserDTO {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      token: this.props.token,
    };
  }
}
