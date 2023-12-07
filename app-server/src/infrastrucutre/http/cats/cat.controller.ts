import { 
  BadRequestException,
  Controller, 
  Get, 
  Param, 
  Post 
} from '@nestjs/common';
import { CreateCatUseCase } from 'src/application/use-case/cats/create-cat.use-case';
import { GetCatUseCase } from 'src/application/use-case/cats/get-cat.use-case';

const UUID_V4_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

@Controller('cat')
export class CatController {
  constructor(
    private readonly createCatUseCase: CreateCatUseCase,
    private readonly getCatUseCase: GetCatUseCase,
  ){}

  @Get(':uuid')
  get(@Param('uuid') uuid: string) {
    if(!UUID_V4_REGEX.test(uuid)) throw new BadRequestException('UUID parameter is not valid')

    const cat = this.getCatUseCase.handle(uuid)

    return {
      status: true,
      data: cat
    }
  }
  
  @Post('async/:uuid')
  createAsync(@Param('uuid') uuid: string){
    if(!UUID_V4_REGEX.test(uuid)) throw new BadRequestException('UUID parameter is not valid')

    this.getCatUseCase.handle(uuid)

    return {
      status: true,
    }
  }

  @Post(':uuid')
  async create(@Param('uuid') uuid: string) {
    if(!UUID_V4_REGEX.test(uuid)) throw new BadRequestException('UUID parameter is not valid')
    
    const cat = await this.createCatUseCase.handle(uuid)

    return {
      status: true,
      data: cat
    }
  }
}
