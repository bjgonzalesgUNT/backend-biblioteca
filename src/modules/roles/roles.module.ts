import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { rolesProviders } from './providers';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [RolesService, ...rolesProviders],
  imports: [AuthModule],
})
export class RolesModule {}
