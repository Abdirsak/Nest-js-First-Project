import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [userModule, TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
