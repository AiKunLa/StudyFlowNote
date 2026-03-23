import { BadRequestException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from './interfaces/jwt-payload.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

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

  /**
   * 用户登录
   */
  async login(dto: LoginDto) {
    this.logger.log(`Login attempt for: ${dto.email}`);

    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      this.logger.warn(`Login failed - user not found: ${dto.email}`);
      throw new UnauthorizedException('邮箱或密码错误');
    }

    const isPasswordValid = this.verifyPassword(dto.password, user.password);
    if (!isPasswordValid) {
      this.logger.warn(`Login failed - invalid password: ${dto.email}`);
      throw new UnauthorizedException('邮箱或密码错误');
    }

    const token = this.generateToken(user.id, user.email);

    this.logger.log(`User logged in successfully: ${user.id}`);

    return {
      accessToken: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  /**
   * 验证 JWT Token
   */
  verifyToken(token: string): JwtPayload {
    try {
      return jwt.verify(token, JWT_SECRET) as JwtPayload;
    } catch (error) {
      this.logger.warn(`Token verification failed: ${error.message}`);
      throw new UnauthorizedException('Token 无效或已过期');
    }
  }

  /**
   * 获取当前用户信息
   */
  async getCurrentUser(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }

    return user;
  }

  private hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }

  private verifyPassword(password: string, hashedPassword: string): boolean {
    const [salt, hash] = hashedPassword.split(':');
    const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === verifyHash;
  }

  private generateToken(userId: string, email: string): string {
    const payload: JwtPayload = { sub: userId, email };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'] });
  }
}
