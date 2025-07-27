import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(details: {
    email: string;
    name: string;
    googleId: string;
  }) {
    const user = await this.userService.findOrCreate(
      details.googleId,
      details.email,
      details.name,
    );
    return user;
  }
}
