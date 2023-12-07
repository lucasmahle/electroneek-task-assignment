import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_TOKEN, IConfig } from 'src/core/config/config';
import axios from 'axios';

@Injectable()
export class CatApiService {
  constructor(
    @Inject(CONFIG_TOKEN) private readonly Config: IConfig
  ){}

  async generateNewCatImage(){
    const request = await axios.get(this.Config.API_JSON)

    return {
      tags: request.data.tags,
      _id: request.data._id,
    }
  }

  generatCatImage(_id: string): string{
    return this.Config.API_IMAGE + _id
  }
}
