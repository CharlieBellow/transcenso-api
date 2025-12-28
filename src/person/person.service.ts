import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  @Inject()
  private readonly prisma: PrismaService;

  async create(createPersonDto: CreatePersonDto) {
    const userId = '1f54a26d-5f2e-429c-86f6-2d9366b4e1fc';
    return await this.prisma.person.create({
      data: {
        ...createPersonDto,
        user: { connect: { id: '939bc80a-84c6-41f6-9cfd-894d8ab469c0' } },
        sexualityId: {
          connect: { id: 'db36b90d-e8e2-43a2-af4a-a525fdce9482' },
        },
        genderId: {
          connect: { id: '939bc80a-84c6-41f6-9cfd-894d8ab469c0' },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.person.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.person.findUnique({ where: { id } });
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    return await this.prisma.person.update({
      where: { id },
      data: updatePersonDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.person.delete({ where: { id } });
  }
}
