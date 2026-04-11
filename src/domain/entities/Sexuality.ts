export interface SexualityProps {
  id?: string;
  title: string;
  slug?: string;
  description: string;
  acronym: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Sexuality {
  private props: SexualityProps;
  private _id: string;

  constructor(props: SexualityProps) {
    this._id = props.id ?? crypto.randomUUID();
    if (!props.title || props.title.trim() === '') {
      throw new Error('O título é obrigatório.');
    }

    // colocar a lógica de que não pode ter duas siglas iguais, ou seja, não pode ter dois gêneros com a mesma sigla. Isso é importante para garantir a integridade dos dados e evitar confusões na hora de identificar os gêneros.
    const normalizedSigla = props.acronym.trim().toUpperCase();

    if (normalizedSigla.length < 2 || normalizedSigla.length > 5) {
      throw new Error('A sigla deve ter entre 3 e 5 caracteres.');
    }

    const generatedSlug = props.title
      .toLowerCase()
      .trim()
      .normalize('NFD') // Remove acentos
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');

    this.props = {
      ...props,
      slug: props.slug ?? generatedSlug,
      acronym: normalizedSigla,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get title() {
    return this.props.title;
  }

  get acronym() {
    return this.props.acronym;
  }
  get description() {
    return this.props.description;
  }

  toDTO(): SexualityDTO {
    return {
      id: this.id,
      title: this.title,
      acronym: this.acronym,
      description: this.description,
    };
  }
}
