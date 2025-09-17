import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [UsersService, AuthService],
  imports: [UsersModule, JwtModule],
  exports: [UsersService],
})
export class UsersModule {}
