import {
  BEARER_KEY,
  ROLE_NOT_AUTHORIZED_MESSAGE,
  ROLES_KEY,
  USER_NOT_AUTHORIZED_MESSAGE,
} from '@/core/constants';
import { UserDB } from '@/modules/users/dto';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //* GET METADATA
    const requiredRole = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRole.length) return true;

    const req = context.switchToHttp().getRequest() as Request;
    const authHeader = req.headers.authorization;

    const [bearer, token] = authHeader.split(' ');

    if (bearer != BEARER_KEY || !token)
      throw new UnauthorizedException(USER_NOT_AUTHORIZED_MESSAGE);

    // *GET USER
    const user = req.user as UserDB;

    // *CHECK ROLE
    const validRole = requiredRole.some((role) => user.role === role);

    if (!validRole)
      throw new UnauthorizedException(ROLE_NOT_AUTHORIZED_MESSAGE);

    return true;
  }
}
