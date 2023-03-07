import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() obj:{name:string}): string {
    const res= this.appService.getHello();
    return `${res}  ${obj.name}`
  }
}
