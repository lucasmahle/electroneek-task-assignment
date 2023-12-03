import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiGateway } from './gateways/api.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ApiGateway,
  ],
})
export class AppModule {}
