import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [User] })],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
