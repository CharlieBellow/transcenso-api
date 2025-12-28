import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateSexualityDto } from './dto/create-sexuality.dto';
import { UpdateSexualityDto } from './dto/update-sexuality.dto';

@Injectable()
export class SexualityService {
  @Inject()
  private readonly prisma: PrismaService;

  async create(createSexualityDto: CreateSexualityDto) {
    return await this.prisma.sexuality.create({ data: createSexualityDto });
  }

  async findAll() {
    return await this.prisma.sexuality.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.sexuality.findUnique({ where: { id } });
  }

  async update(id: string, updateSexualityDto: UpdateSexualityDto) {
    return await this.prisma.sexuality.update({
      where: { id },
      data: updateSexualityDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.sexuality.delete({ where: { id } });
  }
}
