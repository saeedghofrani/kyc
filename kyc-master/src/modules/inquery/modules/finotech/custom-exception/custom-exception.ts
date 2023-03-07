import { HttpException, HttpStatus } from '@nestjs/common';

export class AxiosRequestFailed extends HttpException{
  constructor() {
    super(`Axios Request Failed`,HttpStatus.BAD_REQUEST);
  }
}

export class RequestHaveError extends HttpException{
  constructor() {
    super(`Response of request have error`,HttpStatus.BAD_REQUEST);
  }
}