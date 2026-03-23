import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: '用户邮箱' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123', description: '密码（至少6位）' })
  @IsString()
  @MinLength(6)
  password: string;
}
