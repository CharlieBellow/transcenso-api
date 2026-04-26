import { EmploymentDTO, TypeJob } from 'src/domain/dtos/employmentDto';

interface EmploymentProps {
  title: string;
  typeEmployment: string;
  company: string;
  worksActually: boolean;
  createdAt: Date;
  updatedAt?: Date;
  description: string;
  skills: string[];
  location: string;
  typeJob: TypeJob;
  position: string;
  startDate: Date;
  endDate?: Date;
}

export class Employment {
  private props: EmploymentProps;

  constructor(props: EmploymentProps) {
    this.props = props;
  }

  get title(): string {
    return this.props.title;
  }

  get typeEmployment(): string {
    return this.props.typeEmployment;
  }

  get company(): string {
    return this.props.company;
  }

  get worksActually(): boolean {
    return this.props.worksActually;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  get description(): string {
    return this.props.description;
  }

  get skills(): string[] {
    return this.props.skills;
  }

  get location(): string {
    return this.props.location;
  }

  get typeJob(): TypeJob {
    return this.props.typeJob;
  }

  get position(): string {
    return this.props.position;
  }

  get startDate(): Date {
    return this.props.startDate;
  }

  get endDate(): Date | undefined {
    return this.props.endDate;
  }

  toDTO(): EmploymentDTO {
    return {
      title: this.title,
      typeEmployment: this.typeEmployment,
      company: this.company,
      worksActually: this.worksActually,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      description: this.description,
      skills: this.skills,
      location: this.location,
      typeJob: this.typeJob,
      position: this.position,
      startDate: this.startDate,
      endDate: this.endDate,
    };
  }
}
