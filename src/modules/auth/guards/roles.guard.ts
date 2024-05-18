import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { BEARER_KEY, ROLES_KEY } from '../../../core/constants';
import { IUserDB } from '../interfaces';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //* GET METADATA
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) return true;

    const req = context.switchToHttp().getRequest() as Request;
    const authHeader = req.headers.authorization;

    const [bearer, token] = authHeader.split(' ');

    if (bearer != BEARER_KEY || !token)
      throw new UnauthorizedException('Token is invalid');

    // GET USER
    const user = req.user as IUserDB;

    const isPermittedRole = user.roles.some((role) =>
      requiredRoles.includes(role.rol_nombre),
    );

    if (!isPermittedRole)
      throw new UnauthorizedException('Your role(s) is not authorized');

    return true;
  }
}
