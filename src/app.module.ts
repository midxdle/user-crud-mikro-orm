import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [MikroOrmModule.forRoot(), UserModule],
  // Now, the EntityManager will be available to inject across entire project
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
