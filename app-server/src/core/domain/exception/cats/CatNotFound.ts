import { HttpException, HttpStatus } from "@nestjs/common";

export class CatNotFound extends HttpException {
  constructor(uuid: string) {
    super(`Cat ${uuid} is not found`, HttpStatus.NOT_FOUND);
  }
}
