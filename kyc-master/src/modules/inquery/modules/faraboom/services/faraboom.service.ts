import { HttpService } from "@nestjs/axios";
import { Injectable } from '@nestjs/common';
import { HandlerError } from "src/common/class/handler.error";
import { HandlerService } from "src/utility/handler/handler.service";
import { CreateBirthNationalMatchDto } from "../dtos/create-birth-national-match.dto";
import { CreateInqueryBirthDto } from "../dtos/create-inquery-birth.dto";
import { CreateInqueryShebaDto } from "../dtos/create-inquery-sheba.dto";
import { CreatePhoneNationalMatchDto } from "../dtos/create-phone-national-match.dto";
import InqueryShebaUtility from "../utility/inquery-accounting.utility";
import InqueryMobileUtility from "../utility/inquery-mobile.utility";
import InquiryNationalUtility from "../utility/inquery-national.utility";
import { CreateInqueryMobileDto } from './../dtos/create-inquery-mobile.dto';
import { InqueryNationalBirthService } from "./inquery-national-birth.service";
import { InqueryNationalPhoneService } from "./inquery-national-phone.service";

@Injectable()
export class FaraboomService {
    inquiryNationalUtility: InquiryNationalUtility
    inqueryAccountingUtility: InqueryShebaUtility
    inqueryMobileUtility: InqueryMobileUtility
    constructor(private handlerService: HandlerService,
        private httpService: HttpService,
        private inqueryNationalPhoneService: InqueryNationalPhoneService,
        private inqueryNationalBirthService: InqueryNationalBirthService
    ) {
        this.inquiryNationalUtility = new InquiryNationalUtility(httpService)
        this.inqueryAccountingUtility = new InqueryShebaUtility(httpService)
        this.inqueryMobileUtility = new InqueryMobileUtility(httpService)
    }

    async inquiryShebaFaraboom(createInquerySheba: CreateInqueryShebaDto) {
        try {
            return await this.inqueryAccountingUtility.inquiryShebaFaraboom(createInquerySheba);
        } catch (e) {
            
            console.log(e);
            const result = await HandlerError.errorHandler(e);
            await this.handlerService.handlerException400("FA", result);
        }
    }

    async inquiryNationalFaraboom(createInqueryBirthDto: CreateInqueryBirthDto) {
        try {
            const result = await this.inquiryNationalUtility.inquiryNationalFaraboom(createInqueryBirthDto);
            const createBirthNationalMatchDto: CreateBirthNationalMatchDto = {
                birth_date:createInqueryBirthDto.birth_date,
                match:result.match,
                national_code:createInqueryBirthDto.national,
            }
            await this.inqueryNationalBirthService.createWithMath(createBirthNationalMatchDto);
            return result
        } catch (e) {
            const result = await HandlerError.errorHandler(e);
            console.log('error =>>>>>>',e.response.data.errors);
            await this.handlerService.handlerException400("FA", result);
        }
    }


    async inquiryMobileFaraboom(createInqueryMobileDto: CreateInqueryMobileDto) {
        try {
            const result = await this.inqueryMobileUtility.inquiryMobileFaraboom(createInqueryMobileDto);

            const createPhoneNationalMatchDto:CreatePhoneNationalMatchDto = {
                match: result.match,
                national_code: createInqueryMobileDto.national_code,
                phone_number: createInqueryMobileDto.phone_number,
            } 
            console.log(createPhoneNationalMatchDto);
            await this.inqueryNationalPhoneService.createPhoneWithMath(createPhoneNationalMatchDto)
            return result
        } catch (e) {
            
            const result = await HandlerError.errorHandler(e);
            await this.handlerService.handlerException400("FA", result);
        }
    }
}
