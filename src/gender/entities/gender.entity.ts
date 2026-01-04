import { person } from 'generated/prisma/browser';
import { genderIdentity } from 'generated/prisma/client';

export class Gender implements genderIdentity {
  name: string;
  id: string;
  acronym: string;
  createdAt: Date;
  updatedAt: Date;
  person: person[] | null;
}
