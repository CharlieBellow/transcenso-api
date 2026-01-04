import { person } from 'generated/prisma/client';

export class Person implements person {
  name: string;
  id: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
  genderId: string;
  sexualityId: string;
}
