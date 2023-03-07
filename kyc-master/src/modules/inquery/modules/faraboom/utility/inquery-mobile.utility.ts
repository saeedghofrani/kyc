import { HttpService } from '@nestjs/axios';
import { Injectable } from "@nestjs/common";
import axios from 'axios';
import { CreateInqueryMobileDto } from "../dtos/create-inquery-mobile.dto";
import { FaraboomConfigInterface } from '../interface/faraboom-config.interface';

@Injectable()
export default class InquiryMobileUtility {
  private httpService: HttpService;
  private readonly faraboomConfigInterface: FaraboomConfigInterface;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
    this.faraboomConfigInterface = {
      headers: {
        'Accept-Language': 'fa',
        'App-Key': `${process.env.FARABOOM_API_KEY}`,
        'Token-Id': `${process.env.FARABOOM_TOKEN_ID}`,
        'Device-Id': '185.252.28.236',
        'CLIENT-DEVICE-ID': '127.0.0.1',
        'CLIENT-IP-ADDRESS': '127.0.0.1',
        'CLIENT-USER-AGENT': 'User Agent',
        'CLIENT-USER-ID': '9151099831',
        'CLIENT-PLATFORM-TYPE': 'WEB',
        'Content-Type': 'application/json',
      },
    };
  }

  async inquiryMobileFaraboom(createInqueryMobile: CreateInqueryMobileDto) {
    let data = JSON.stringify({
      mobile: createInqueryMobile.phone_number,
      national_code: createInqueryMobile.national_code
    });
    this.faraboomConfigInterface.data = data;
    this.faraboomConfigInterface.method = 'post';
    this.faraboomConfigInterface.url = `${process.env.FARABOOM_BASE_URL}mobile/national-code`;
    const response = await axios({ headers: this.faraboomConfigInterface.headers, method: this.faraboomConfigInterface.method, url: this.faraboomConfigInterface.url, data: this.faraboomConfigInterface.data });
    console.log(response);
    return response.data;
  }
}
