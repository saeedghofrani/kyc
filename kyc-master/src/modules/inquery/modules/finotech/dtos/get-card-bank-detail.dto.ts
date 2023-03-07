import { IsNotEmpty, IsNumber, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetBankCardDetailDto {
  @ApiProperty()
  // @IsNotEmpty()
  // @Length(16,16)
  // @IsNumber()
  card_number:number
}