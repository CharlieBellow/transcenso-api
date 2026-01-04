import { user } from 'generated/prisma/client';

export class User implements user {
  name: string;
  id: string;
  email: string;
  password: string;
  personId: string;
  createdAt: Date;
  updatedAt: Date;
}
