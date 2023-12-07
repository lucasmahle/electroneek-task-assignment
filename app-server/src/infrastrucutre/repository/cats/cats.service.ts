import { Injectable } from '@nestjs/common';
import { CatNotFound } from 'src/core/domain/exception/cats/CatNotFound';
import Cat from 'src/core/domain/model/cats/Cat';
import { ICatsRepository } from 'src/core/domain/respoitory/ICatsRepository';

const IN_MEMORY_CATS: {[key: string]: Cat} = {}

export const CATS_REPOSITORY_TOKEN = Symbol('CATS_REPOSITORY_TOKEN');

@Injectable()
export class CatsService implements ICatsRepository {
  get(uuid: string): Cat {
    const cat = IN_MEMORY_CATS[uuid];

    if(!cat) throw new CatNotFound(uuid);

    return cat;
  }

  insert(cat: Cat): Cat {
    IN_MEMORY_CATS[cat.uuid] = cat;
    return cat;
  }

  update(uuid: string, cat: Cat): Cat {
    this.get(uuid);
    IN_MEMORY_CATS[cat.uuid] = cat;
    return cat;

  }

  delete(uuid: string): void {
    this.get(uuid);
    delete IN_MEMORY_CATS[uuid]
  }
}
