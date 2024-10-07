import { UserDB } from '@/modules/users/dto';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserDB => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as UserDB;
    return user;
  },
);
