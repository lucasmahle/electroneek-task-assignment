import { Inject, Injectable } from '@nestjs/common';
import Cat from 'src/core/domain/model/cats/Cat';
import { ICatsRepository } from 'src/core/domain/respoitory/ICatsRepository';
import { CatApiService } from 'src/infrastrucutre/cat-api/cat-api.service';
import { CATS_REPOSITORY_TOKEN } from 'src/infrastrucutre/repository/cats/cats.service';

@Injectable()
export class CreateCatUseCase {
  constructor(
    @Inject(CATS_REPOSITORY_TOKEN) private readonly catRepository: ICatsRepository,
    private readonly catApiService: CatApiService,
  ){}

  async handle(uuid: string): Promise<Cat> {
    const jsonCat = await this.catApiService.generateNewCatImage()

    const cat = new Cat()

    cat.uuid = uuid
    cat.createdAt = new Date
    cat.image = this.catApiService.generatCatImage(jsonCat._id)
    cat.tags = jsonCat.tags

    return this.catRepository.insert(cat)
  }
}
