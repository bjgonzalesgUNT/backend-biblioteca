import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../../modules/user/user.entity';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { LoginDto } from '../dto/login.dto';
import { GetUser } from '../decorators/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiTags('auth')
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
}
