
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import { BankEnums } from '../enums/bank.enum';

export class ConvertBankAccountToShebaParam {
  @ApiProperty({required:false})
  trackId?:string

  @ApiProperty()
  bankCode:BankEnums

  @ApiProperty()
  deposit:string
}