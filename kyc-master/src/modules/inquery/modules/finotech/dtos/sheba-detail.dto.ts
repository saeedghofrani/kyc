import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ShebaDetailParam {
  @ApiProperty({required:false})
  trackId?:string

  @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // @Length(26,26)
  iban:string
}