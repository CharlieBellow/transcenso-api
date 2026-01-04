import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';

@Injectable()
export class GenderService {
  @Inject()
  private readonly prisma: PrismaService;

  async create(createGenderDto: CreateGenderDto, userId: string, personId) {
    return await this.prisma.genderIdentity.create({
      data: {
        ...createGenderDto,
        // user: { connect: { id: userId } },
        person: { connect: { id: personId } },
      },
    });
  }

  async findAll() {
    return await this.prisma.genderIdentity.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.genderIdentity.findUnique({ where: { id } });
  }

  async update(id: string, updateGenderDto: UpdateGenderDto) {
    return await this.prisma.genderIdentity.update({
      where: { id },
      data: updateGenderDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.genderIdentity.delete({ where: { id } });
  }
}
