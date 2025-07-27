import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [UserService, PrismaService],
  exports: [UserService], // Export UserService to be used in other modules
})
export class UserModule {}
