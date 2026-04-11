export enum TypeJob {
  online = 'online',
  presencial = 'presencial',
  hybrid = 'híbrido',
}
export interface EmploymentDTO {
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
