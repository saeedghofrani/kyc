import { HttpService } from '@nestjs/axios';
import { Injectable } from "@nestjs/common";
import axios from 'axios';
import { CreateInqueryBirthDto } from "../dtos/create-inquery-birth.dto";
import { TypeBankEnum } from "../enums/type-bank.enum";
import { FaraboomConfigInterface } from '../interface/faraboom-config.interface';

@Injectable()
export default class InquiryNationalUtility {
  private httpService: HttpService;
  private readonly faraboomConfigInterface: FaraboomConfigInterface;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
    this.faraboomConfigInterface = {
      headers: {
        'Accept-Language': 'fa',
        'App-Key': `${process.env.FARABOOM_API_KEY}`,
        'Token-Id': `${process.env.FARABOOM_TOKEN_ID}`,
        'Device-Id': '138.201.196.198',
        'CLIENT-DEVICE-ID': '127.0.0.1',
        'CLIENT-IP-ADDRESS': '127.0.0.1',
        'CLIENT-USER-AGENT': 'User Agent',
        'CLIENT-USER-ID': '9151099831',
        'CLIENT-PLATFORM-TYPE': 'WEB',
        'Content-Type': 'application/json',
        'BANK-ID': TypeBankEnum.SATPIR,
      },
    };
  }
  async inquiryNationalFaraboom(createInqueryBirthDto: CreateInqueryBirthDto) {
    const data = JSON.stringify({
      national_code: createInqueryBirthDto.national,
      birth_date: `${createInqueryBirthDto.birth_date}T00:00:00`,
    });
    this.faraboomConfigInterface.data = data;
    this.faraboomConfigInterface.method = 'post';
    this.faraboomConfigInterface.url = `${process.env.FARABOOM_BASE_URL}identity/inquiry/birthDate`;
    const response = await axios({ headers: this.faraboomConfigInterface.headers, method: this.faraboomConfigInterface.method, url: this.faraboomConfigInterface.url, data: this.faraboomConfigInterface.data })
    console.log('response =>>>>>>>',response.data);
    return response.data;
  }
}
