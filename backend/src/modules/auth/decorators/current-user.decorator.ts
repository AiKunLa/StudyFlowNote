import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

/**
 * 获取当前登录用户信息
 *
 * 使用方式：
 * ```typescript
 * // 获取整个 user 对象
 * @Get()
 * async getUser(@CurrentUser() user: JwtPayload) { ... }
 *
 * // 获取 user 的特定字段
 * @Get()
 * async getUserId(@CurrentUser('sub') userId: string) { ... }
 * ```
 */
export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return data ? user?.[data] : user;
  },
);
