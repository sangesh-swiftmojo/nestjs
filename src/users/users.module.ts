import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.module';

@Module({
  providers: [UsersService, AuthService],
  imports: [UsersModule],
  exports: [UsersService],
})
export class UsersModule {}
