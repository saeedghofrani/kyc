import { ApiProperty } from '@nestjs/swagger';
import { Allow } from "class-validator";

export class CreateInqueryMobileDto {

  @ApiProperty()
  @Allow()
  phone_number: string;

  @ApiProperty()
  @Allow()
  national_code: string;
}
