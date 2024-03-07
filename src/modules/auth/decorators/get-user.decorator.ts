import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from 'src/modules/user/user.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as User;
    return user;
  },
);
