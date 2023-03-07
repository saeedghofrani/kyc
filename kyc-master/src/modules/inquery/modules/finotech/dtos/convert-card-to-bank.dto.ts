import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class ConvertCardToBankAccountParam {

  @ApiProperty({required:false})
  trackId?:string

  @ApiProperty()
  // @IsNotEmpty()
  // @Length(16,16)
  // @IsNumber()
  card:number
}