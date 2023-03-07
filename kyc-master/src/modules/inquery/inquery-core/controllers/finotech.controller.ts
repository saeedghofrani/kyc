import { Body, Controller, Get, Header, Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConvertBankAccountToShebaParam } from '../../modules/finotech/dtos/convert-card-sheba.dto';
import { ConvertCardToBankAccountParam } from '../../modules/finotech/dtos/convert-card-to-bank.dto';
import { ConvertCardToShebaParam } from '../../modules/finotech/dtos/convert-card-to-sheba.dto';
import { FacilityWithNationalCodeDto } from '../../modules/finotech/dtos/facility-with-national-code.dto';
import { GetBankCardDetailDto } from '../../modules/finotech/dtos/get-card-bank-detail.dto';
import { ShebaDetailParam } from '../../modules/finotech/dtos/sheba-detail.dto';
import { VerifyRequestTokenSmsDto } from '../../modules/finotech/dtos/verify-request-token-sms.dto';
import { FinooService } from '../../modules/finotech/services/finotech.service';

@ApiTags('Finoo')
@Controller("finoo")
export class FinooController {
  constructor(private finooService:FinooService)
  {}

  @Post('card/detail')
  async getBankCartDetail(@Body() getBankCardDetailDto:GetBankCardDetailDto):Promise<any>
  {
    return await this.finooService.getBankCartDetail(getBankCardDetailDto)
  }

  @Post('convert/card/sheba')

  async convertCardToSheba(@Body() convertCardToShebaParam:ConvertCardToShebaParam):Promise<any>
  {
    return await this.finooService.convertCardToSheba(convertCardToShebaParam)
  }

  @Post('sheba/detail/')
  async getShebaDeatil(@Body() shebaDetailParam:ShebaDetailParam):Promise<any>
  {
    return await this.finooService.getShebaDetail(shebaDetailParam)
  }

  @Post('convert/card/bank/account')
  async convertCardToBankAccount(@Body() convertCardToBankAccountParam:ConvertCardToBankAccountParam):Promise<any>
  {
    return await this.finooService.convertCardToBankAccount(convertCardToBankAccountParam)
  }

  @Post('convert/bank/account/sheba')
  async convertBankAccountToSheba(@Body() convertBankAccountToShebaParam:ConvertBankAccountToShebaParam):Promise<any>
  {
    return await this.finooService.convertBankAccountToSheba(convertBankAccountToShebaParam)
  }

  @Get('pre/request/token/sms')
  async preRequestTokenSms(@Query('mobile') mobile: string){
    return await this.finooService.preRequestTokenSms(mobile);
  }

  @Post('verify/request/token/sms')
  async verifyRequestTokenSms(@Body() verifyRequestTokenSmsDto: VerifyRequestTokenSmsDto){
    return await this.finooService.verifyRequestTokenSms(verifyRequestTokenSmsDto);
  }

  // @Get('confirm/request/token/sms')
  // async confirmRequestTokenSms(@Query('code') code: string){
  //   return await this.finooService.confirmRequestTokenSms(code);
  // }

  @Post('kyc/national/code')
  async kyc(@Body() facilityWithNationalCodeDto: FacilityWithNationalCodeDto){
    return await this.finooService.facilityWithNationalCode(facilityWithNationalCodeDto)
  }
}