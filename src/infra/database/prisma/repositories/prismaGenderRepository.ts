import { Injectable } from '@nestjs/common';
import { Gender } from 'src/domain/entities/gender';
import { GenderRepository } from 'src/domain/repositories/genderRepository';
import { PrismaService } from '../prismaService';
import { PrismaGenderMapper } from '../mappers/prismaGenderMapper';

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
      data,
    });
  }
}
