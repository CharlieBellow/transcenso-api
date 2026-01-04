import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserService } from 'src/user/user.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  @Inject()
  private readonly prisma: PrismaService;
  @Inject()
  private readonly userService: UserService;

  async create(createPersonDto: CreatePersonDto, userId: string) {
    const hasUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    const existsGenderId = await this.prisma.genderIdentity.findUnique({
      where: { id: createPersonDto.genderId },
    });
    const existsSexualityId = await this.prisma.sexuality.findUnique({
      where: { id: createPersonDto.sexualityId },
    });

    if (!(existsSexualityId.id == createPersonDto.sexualityId)) {
      throw new BadRequestException('Sexuality not found');
    }

    if (!(existsGenderId.id == createPersonDto.genderId)) {
      throw new BadRequestException('Gender not found');
    }

    if (!hasUser) {
      throw new BadRequestException('User not found');
    }
    if (hasUser.personId !== null) {
      throw new ConflictException('User already has a person associated');
    }

    if (
      existsSexualityId.id == createPersonDto.sexualityId &&
      existsGenderId.id == createPersonDto.genderId
    ) {
      const createdPerson = await this.prisma.person.create({
        data: {
          ...createPersonDto,
          user: { connect: { id: userId } },
        },
      });
      const userPersonId = await this.userService.updateUser({
        where: { id: userId },
        data: { person: { connect: { id: createdPerson.id } } },
      });
      console.log('userPersonId', userPersonId);

      return createdPerson;
    } else {
      throw new BadRequestException('Gender or Sexuality not found');
    }
  }

  async findAll() {
    return await this.prisma.person.findMany({
      include: {
        gender: { omit: { updatedAt: true, createdAt: true } },
        sexuality: { omit: { updatedAt: true, createdAt: true } },
        user: { omit: { updatedAt: true, createdAt: true, password: true } },
      },
    });
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
