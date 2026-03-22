import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * 注册用户
   */
  async register(dto: RegisterDto) {
    this.logger.log(`Registering user: ${dto.email}`);

    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (existingUser) {
        this.logger.warn(`Email already registered: ${dto.email}`);
        throw new BadRequestException('邮箱已被注册');
      }

      const hashedPassword = this.hashPassword(dto.password);

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          name: dto.name,
        },
      });

      this.logger.log(`User registered successfully: ${user.id}`);

      const { password: _, ...result } = user;
      return result;
    } catch (error) {
      this.logger.error(`Failed to register user: ${dto.email}`, error.stack);
      throw error;
    }
  }

  private hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }
}
