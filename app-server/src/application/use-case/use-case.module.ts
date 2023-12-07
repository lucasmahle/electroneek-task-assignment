import { Module } from '@nestjs/common';
import { CreateCatUseCase } from './cats/create-cat.use-case';
import { GetCatUseCase } from './cats/get-cat.use-case';
import { CATS_REPOSITORY_TOKEN, CatsService } from 'src/infrastrucutre/repository/cats/cats.service';
import { CatApiService } from 'src/infrastrucutre/cat-api/cat-api.service';
import { CONFIG_TOKEN, Config } from 'src/core/config/config';

@Module({
  exports: [
    CreateCatUseCase,
    GetCatUseCase,
  ],
  imports: [
    
  ],
  providers: [
    CreateCatUseCase,
    GetCatUseCase,
    CatApiService,
    {
      provide: CATS_REPOSITORY_TOKEN,
      useClass: CatsService,
    },
    {
      provide: CONFIG_TOKEN,
      useValue: Config
    }
  ],
})
export class UseCaseModule {}
