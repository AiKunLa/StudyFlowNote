import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ResponseDto } from '../../common/dto/response.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './decorators/public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @Public()
  @ApiOperation({ summary: 'User registration' })
  async register(@Body() dto: RegisterDto): Promise<ResponseDto> {
    const data = await this.authService.register(dto);
    return ResponseDto.success(data);
  }

  @Post('login')
  @Public()
  @ApiOperation({ summary: 'User login' })
  async login(@Body() dto: LoginDto): Promise<ResponseDto> {
    const data = await this.authService.login(dto);
    return ResponseDto.success(data);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user info' })
  async getCurrentUser(@CurrentUser() user: JwtPayload): Promise<ResponseDto> {
    const data = await this.authService.getCurrentUser(user.sub);
    return ResponseDto.success(data);
  }
}
