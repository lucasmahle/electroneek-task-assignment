import { Module } from '@nestjs/common';
import { CatController } from './cats/cat.controller';
import { UseCaseModule } from 'src/application/use-case/use-case.module';

@Module({
  controllers: [
    CatController
  ],
  imports: [
    UseCaseModule,
  ],
  providers: [
  ]
})
export class HttpModule {}
