import { ERoutes } from '@/common/enums';
import { CreateUserDto, UserDB } from '@/modules/users/dto';
import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../decorators';
import { GetUser } from '../decorators/get-user.decorator';
import { AuthResponseDto, ChangePasswordDto } from '../dto';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';

@Controller(ERoutes.AUTH)
@ApiTags(ERoutes.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ type: AuthResponseDto })
  @UseGuards(AuthGuard('local'))
  login(@GetUser() user: UserDB) {
    return this.authService.login(user);
  }

  @Post('signup')
  @ApiOkResponse({ type: AuthResponseDto })
  singUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.singUp(createUserDto);
  }

  @Patch('change-password')
  @Auth()
  changePassword(
    @GetUser() user: UserDB,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(user, changePasswordDto);
  }
}
