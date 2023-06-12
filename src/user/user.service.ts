import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findOne({ username }: { username: string }) {
    return {
      username: 'admin',
      password: 'admin123',
    };
  }
}
