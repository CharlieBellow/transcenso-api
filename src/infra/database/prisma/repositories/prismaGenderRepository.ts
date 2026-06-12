import { Injectable } from '@nestjs/common';
import { Gender } from '../../../../domain/entities/gender';
import { GenderRepository } from '../../../../domain/repositories/genderRepository';
import { PrismaGenderMapper } from '../mappers/prismaGenderMapper';
import { PrismaService } from '../PrismaService';

@Injectable()
export class PrismaGenderRepository implements GenderRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Gender | null> {
    const gender = await this.prisma.gender.findUnique({
      where: { id },
    });

    if (!gender) return null;

    return PrismaGenderMapper.toDomain(gender);
  }

  async findBySlug(slug: string): Promise<Gender | null> {
    const gender = await this.prisma.gender.findUnique({
      where: { slug },
    });

    if (!gender) return null;

    return PrismaGenderMapper.toDomain(gender);
  }

  async listAll(): Promise<Gender[]> {
    const genders = await this.prisma.gender.findMany();

    return genders.map((g) => PrismaGenderMapper.toDomain(g));
  }

  async findByAcronym(acronym: string): Promise<Gender | null> {
    const gender = await this.prisma.gender.findUnique({
      where: { acronym },
    });

    if (!gender) return null;

    return PrismaGenderMapper.toDomain(gender);
  }

  async create(gender: Gender): Promise<void> {
    const data = PrismaGenderMapper.toPrisma(gender);

    await this.prisma.gender.create({
      data: {
        ...data,
        updatedAt: data.updatedAt ?? undefined,
      },
    });
  }

  async update(gender: Gender): Promise<void> {
    const data = PrismaGenderMapper.toPrisma(gender);
    await this.prisma.gender.update({
      where: { id: gender.id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.gender.delete({
      where: { id },
    });
  }
}
