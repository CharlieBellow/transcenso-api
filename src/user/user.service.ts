import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Prisma, user } from 'generated/prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
  @Inject()
  private readonly prisma: PrismaService; // mesma coisa do constructor(private readonly prisma: PrismaService) {}

  //Esse Prisma.UserCreateInput é gerado automaticamente pelo Prisma com base no schema.prisma - ele já cria alguns DTOs básicos para a gente
  async createUser(data: Prisma.userCreateInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
  }

  async updateUser(params: {
    where: Prisma.userWhereUniqueInput;
    data: Prisma.userUpdateInput;
  }): Promise<user> {
    const { where, data } = params;
    // TODO: está retornando a data sem incriptação - corrigir isso
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async user(
    userWhereUniqueInput: Prisma.userWhereUniqueInput,
  ): Promise<Omit<user, 'password'> | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      omit: { password: true },
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.userWhereUniqueInput;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput;
  }): Promise<user[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      // aquele include serve para trazer os dados relacionados da pessoa junto com o usuário. Pois ele está na relação do Prisma O User tem: person person? @relation(fields: [personId], references: [id]) e o person tem o user: user[]
      include: {
        person: { omit: { createdAt: true, updatedAt: true } },
      },
    });
  }

  async deleteUser(where: Prisma.userWhereUniqueInput): Promise<user> {
    return this.prisma.user.delete({
      where,
    });
  }
}
