import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { ApiRoutes } from '../../../core/api';
import { User } from '../../../modules/user/user.entity';
import { GetUser } from '../decorators/get-user.decorator';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';

@Controller(ApiRoutes.AUTH)
@ApiTags(ApiRoutes.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })
  @UseGuards(AuthGuard('local'))
  login(@GetUser() user: User) {
    return this.authService.login(user);
  }

  @Post('signup')
  @ApiOkResponse({ type: User })
  singUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.singUp(createUserDto);
  }

  @Get('validate-token/:token')
  @ApiOkResponse({ type: User })
  validateToken(@Param('token') token: string) {
    return this.authService.validateToken(token);
  }
}
