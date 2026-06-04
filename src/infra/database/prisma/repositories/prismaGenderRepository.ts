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
    if (data.updatedAt === null || data.updatedAt === undefined) {
      delete data.updatedAt;
    }
    await this.prisma.gender.create({
      data,
    });
  }
}
