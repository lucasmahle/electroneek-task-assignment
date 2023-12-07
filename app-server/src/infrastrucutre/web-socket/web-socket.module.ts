import { Module } from '@nestjs/common';
import { ApiGateway } from './gateways/api.gateway';
import { UseCaseModule } from 'src/application/use-case/use-case.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    UseCaseModule,
  ],
  providers: [
    ApiGateway,
    CatsService,
  ]
})
export class WebSocketModule {}
