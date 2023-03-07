import axios, { AxiosResponse } from 'axios';
import { baseUrl, confirmRequestTokenSms, getTokenApi } from './urls';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Injectable } from '@nestjs/common';
import { APiScopesEnum } from './enums/scopes.enum';
import { ConfirmRequestTokenSmsDto } from './dtos/confirm-request-token-sms.dto';
import { RedisService } from 'src/utility/redis/redis.service';

@Injectable()
export class RequestToken {
  PREFIX_TOKEN_SMS_ = "PREFIX_TOKEN_SMS_"
    constructor(private redisService: RedisService){
        this.generateToken()
    }

    private token: string;

    private set setToken(v: string) {
        this.token = v;
    }


    public get getToken(): string {
        return this.token
    }



    @Cron('* * */240 * * *')
    async generateToken() {
        try {
            
            const requestHeader =
            {
                Content_type: 'application/json',
                Authorization: `Basic ${process.env.FINOTECH_AUTH_TOKEN}`
            }

            const requestBody =
            {
                grant_type: "client_credentials",
                nid: "0872912558",
                scopes:
                    `${APiScopesEnum.CARDDETAILS},${APiScopesEnum.CARDTODEPOSIT},${APiScopesEnum.CARDTOIBAN},${APiScopesEnum.DEPOSITTOIBAN},${APiScopesEnum.IBANINQUIRY}`
            }

            const request = await axios({ method: "POST", url: baseUrl + getTokenApi, headers: requestHeader, data: requestBody });
            this.setToken = await request.data.result.value as string
            // console.log(this.token);
            // return request.data.result;
        } catch (error) {
            console.log('error =>>>>>>', error.response.data.error);
        }

    }




    async confirmRequestTokenSms(code: string, national_code: string) {
        try {
          const requestHeader =
          {
            Content_type: 'application/json',
            Authorization: `Basic ${process.env.FINOTECH_AUTH_TOKEN}`
          }
    
          const confirmRequestTokenSmsDto: ConfirmRequestTokenSmsDto = {
            auth_type: "SMS",
            code: code,
            grant_type: "authorization_code",
            redirect_uri: process.env.FINOTECH_REDIRECT_URI
          }
    
          const request = await axios({
            headers: requestHeader,
            url: baseUrl + confirmRequestTokenSms,
            data: confirmRequestTokenSmsDto,
            method: "POST"
          })
          const redisData = {
            token: request.data.result.value
          }
          await this.redisService.setKey(this.PREFIX_TOKEN_SMS_ + national_code,JSON.stringify(redisData),3600);
          return request.data
        } catch (error) {
          console.log(error.response.data.error);
        }
      }
}