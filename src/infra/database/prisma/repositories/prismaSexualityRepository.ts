import { Injectable } from '@nestjs/common';
import { Sexuality } from '../../../../domain/entities/sexuality';

import { SexualityRepository } from 'src/domain/repositories/sexualityRepository';
import { PrismaSexualityMapper } from '../../../../infra/database/prisma/mappers/prismaSexualityMapper';
import { PrismaService } from '../../../../infra/database/prisma/PrismaService';

@Injectable()
export class PrismaSexualityRepository implements SexualityRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Sexuality | null> {
    const sexuality = await this.prisma.sexuality.findUnique({
      where: { id },
    });

    if (!sexuality) return null;

    return PrismaSexualityMapper.toDomain(sexuality);
  }

  async findBySlug(slug: string): Promise<Sexuality | null> {
    const sexuality = await this.prisma.sexuality.findUnique({
      where: { slug },
    });

    if (!sexuality) return null;

    return PrismaSexualityMapper.toDomain(sexuality);
  }

  async listAll(): Promise<Sexuality[]> {
    const sexualities = await this.prisma.sexuality.findMany();

    return sexualities.map((s) => PrismaSexualityMapper.toDomain(s));
  }

  async findByAcronym(acronym: string): Promise<Sexuality | null> {
    const sexuality = await this.prisma.sexuality.findUnique({
      where: { acronym },
    });

    if (!sexuality) return null;

    return PrismaSexualityMapper.toDomain(sexuality);
  }

  async create(sexuality: Sexuality): Promise<void> {
    const data = PrismaSexualityMapper.toPrisma(sexuality);
    await this.prisma.sexuality.create({
      data: {
        ...data,
        updatedAt: data.updatedAt ?? undefined,
      },
    });
  }

  async update(sexuality: Sexuality): Promise<void> {
    const data = PrismaSexualityMapper.toPrisma(sexuality);
    await this.prisma.sexuality.update({
      where: { id: sexuality.id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.sexuality.delete({
      where: { id },
    });
  }
}
