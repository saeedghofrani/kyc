import { HttpService } from '@nestjs/axios';
import { FaraboomConfigInterface } from '../interface/faraboom-config.interface';
import { catchError, map } from 'rxjs';
import { BadRequestException } from '@nestjs/common';
import {CreateInqueryShebaDto} from "../dtos/create-inquery-sheba.dto";

export default class InquiryNationalUtility {
  private httpService: HttpService;
  private readonly faraboomConfigInterface: FaraboomConfigInterface;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
    this.faraboomConfigInterface = {
      headers: {
        'Accept-Language': 'fa',
        'App-Key': `${process.env.FARABOOM_API_KEY}`,
        'Token-Id': `HrHKeP6GxgnTJQgy9BYPJoQxuUwUSTL7YQljgrvfgDjv8u702Xl1LgQtioE89GcPtCOK5VVxARJgNRp5J8vOtQ2IE`,
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
  async inquiryShebaFaraboom(createInquerySheba:CreateInqueryShebaDto) {
    const data = JSON.stringify({
      account: createInquerySheba.sheba,
      national_code: createInquerySheba.national_code,
    });
    this.faraboomConfigInterface.headers['BANK-ID'] = createInquerySheba.typeBankEnum;
    this.faraboomConfigInterface.data = data;
    this.faraboomConfigInterface.method = 'post';
    this.faraboomConfigInterface.url = `${process.env.FARABOOM_BASE_URL}deposits/account/national-code`;
    console.log('herteeeeeeeeeeeeeeeeeeee');
    
    return this.httpService
      .post(
        this.faraboomConfigInterface.url,
        data,
        this.faraboomConfigInterface,
      )
      .pipe(
        catchError((e) => {
          console.log("e.request");
          console.log(e.request);
          console.log("e");
          console.log(e.response.data);
          
          throw new BadRequestException(e);
        }),
        map((res) => {
          return res.data;
        }),
      );
  }
}
