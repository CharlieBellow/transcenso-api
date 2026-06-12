import { Injectable } from '@nestjs/common';

import { Person } from '../../../../domain/entities/person';

import { PersonRepository } from 'src/domain/repositories/personRepository';
import { PrismaPersonMapper } from '../../../../infra/database/prisma/mappers/prismaPersonMapper';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaPersonRepository implements PersonRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Person | null> {
    const person = await this.prisma.person.findUnique({
      where: { id },
      include: {
        gender: true, // Traz os dados da tabela Gender
        sexuality: true, // Traz os dados da tabela Sexuality
      },
    });

    if (!person) return null;

    return PrismaPersonMapper.toDomain(person);
  }

  async findBySlug(slug: string): Promise<Person | null> {
    const person = await this.prisma.person.findUnique({
      where: { slug },
    });

    if (!person) return null;

    return PrismaPersonMapper.toDomain(person);
  }
  async findByCpf(cpf: string): Promise<Person | null> {
    const person = await this.prisma.person.findUnique({
      where: { cpf },
    });

    if (!person) return null;

    return PrismaPersonMapper.toDomain(person);
  }
  async findByRg(rg: string): Promise<Person | null> {
    const person = await this.prisma.person.findUnique({
      where: { rg },
    });

    if (!person) return null;

    return PrismaPersonMapper.toDomain(person);
  }
  async listAll(): Promise<Person[]> {
    const people = await this.prisma.person.findMany();

    return people.map((person) => PrismaPersonMapper.toDomain(person));
  }

  async create(person: Person): Promise<void> {
    const data = PrismaPersonMapper.toPrisma(person);

    await this.prisma.person.create({
      data,
    });
  }
  async update(person: Person): Promise<void> {
    const data = PrismaPersonMapper.toPrisma(person);
    await this.prisma.person.update({
      where: { id: person.id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.person.delete({
      where: { id },
    });
  }
}
