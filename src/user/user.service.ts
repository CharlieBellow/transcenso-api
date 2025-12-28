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
  ): Promise<user | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
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
    });
  }

  async deleteUser(where: Prisma.userWhereUniqueInput): Promise<user> {
    return this.prisma.user.delete({
      where,
    });
  }
}
