import { ApiProperty } from '@nestjs/swagger';
import {Allow} from "class-validator";

export class CreateInqueryBirthDto {

  @ApiProperty()
  @Allow()
  national: string;

  @ApiProperty()
  @Allow()
  birth_date: string;
}
