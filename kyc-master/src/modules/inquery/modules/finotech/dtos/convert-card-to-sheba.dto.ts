import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class ConvertCardToShebaParam {
  @ApiProperty({required:false})
  trackId?:string

  @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // @Length(16,16)
  card:number
}