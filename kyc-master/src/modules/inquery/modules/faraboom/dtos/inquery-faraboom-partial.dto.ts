import { ApiProperty } from '@nestjs/swagger';
import { Allow } from "class-validator";

export class InqueryFaraboomPartialDto {

  @ApiProperty()
  @Allow()
  operation_time: number;

  @ApiProperty()
  @Allow()
  match: boolean;
}
