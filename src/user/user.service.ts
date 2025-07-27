// This service will handle user-related database operations.

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOrCreate(
    googleId: string,
    email: string,
    name: string,
  ): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { googleId },
    });

    if (user) {
      return user;
    }

    return this.prisma.user.create({
      data: {
        googleId,
        email,
        name,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
