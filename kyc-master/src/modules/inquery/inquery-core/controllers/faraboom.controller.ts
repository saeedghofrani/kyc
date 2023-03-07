import { Body, ClassSerializerInterceptor, Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateInqueryBirthDto } from '../../modules/faraboom/dtos/create-inquery-birth.dto';
import { CreateInqueryMobileDto } from '../../modules/faraboom/dtos/create-inquery-mobile.dto';
import { CreateInqueryShebaDto } from '../../modules/faraboom/dtos/create-inquery-sheba.dto';
import { InqueryBirthCUDto } from '../../modules/faraboom/results/inquery-national-birth/inquery-national-birth.c.u.dto';
import { FaraboomService } from '../../modules/faraboom/services/faraboom.service';

@ApiBearerAuth('access-token')
@ApiTags('Inquery Faraboom')
@ApiHeader({
  name: 'language-code',
  description: 'language code',
  schema: {
    default: 'EN'
  }
})
@Controller("inquery/faraboom")
@UseInterceptors(ClassSerializerInterceptor)
export class FaraboomController {
  constructor(
    private readonly faraboomService: FaraboomService
  ) { }

  @ApiOperation({ summary: 'InQuery National Code and Birth Day' })
  @ApiResponse({ status: 201, type: InqueryBirthCUDto })
  @Post("/national/date")
  inquiryNationalWithDate(
    @Body() createInqueryBirthDto: CreateInqueryBirthDto) {
    return this.faraboomService.inquiryNationalFaraboom(createInqueryBirthDto);
  }

  @ApiOperation({ summary: 'InQuery National Code and Phone Number' })
  @ApiResponse({ status: 201, type: InqueryBirthCUDto })
  @Post("/national/mobile")
  async inquiryMobileFaraboom(
    @Body() createInqueryMobile: CreateInqueryMobileDto,
  ) {
    return this.faraboomService.inquiryMobileFaraboom(createInqueryMobile);
  }

  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post("/iban/national")
  async inquiryShebaFaraboom(@Body() createInquerySheba: CreateInqueryShebaDto) {
    return this.faraboomService.inquiryShebaFaraboom(createInquerySheba)
  }

}
