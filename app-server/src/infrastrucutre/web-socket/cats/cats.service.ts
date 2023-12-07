import { Injectable } from '@nestjs/common';
import { CreateCatUseCase } from 'src/application/use-case/cats/create-cat.use-case';
import Cat from 'src/core/domain/model/cats/Cat';

@Injectable()
export class CatsService {
  constructor(
    private readonly createCatUseCase: CreateCatUseCase,
  ){}

  async handleCreate(data: string): Promise<Cat> {
    const msg = JSON.parse(data)
    const cat = await this.createCatUseCase.handle(msg.uuid)

    return cat
  }
}
