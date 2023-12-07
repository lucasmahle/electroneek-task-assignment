import { Inject, Injectable } from '@nestjs/common';
import Cat from 'src/core/domain/model/cats/Cat';
import { ICatsRepository } from 'src/core/domain/respoitory/ICatsRepository';
import { CATS_REPOSITORY_TOKEN } from 'src/infrastrucutre/repository/cats/cats.service';

@Injectable()
export class GetCatUseCase {
  constructor(
    @Inject(CATS_REPOSITORY_TOKEN) private readonly catRepository: ICatsRepository
  ){}

  handle(uuid: string): Cat {
    return this.catRepository.get(uuid)
  }
}
