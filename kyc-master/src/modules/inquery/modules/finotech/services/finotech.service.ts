import { BadRequestException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { LOADIPHLPAPI } from 'dns';
import { url } from 'inspector';
import { HandlerError } from 'src/common/class/handler.error';
import { RedisService } from 'src/utility/redis/redis.service';
import { AxiosRequestFailed } from '../custom-exception/custom-exception';
import { ConfirmRequestTokenSmsDto } from '../dtos/confirm-request-token-sms.dto';
import { ConvertBankAccountToShebaParam } from '../dtos/convert-card-sheba.dto';
import { ConvertCardToBankAccountParam } from '../dtos/convert-card-to-bank.dto';
import { ConvertCardToShebaParam } from '../dtos/convert-card-to-sheba.dto';
import { CreateAccountToShebaDto } from '../dtos/create-account-to-sheba.dto';
import { CreateCardDetailDto } from '../dtos/create-card-detail.dto';
import { CreateCardtoAccountDto } from '../dtos/create-card-to-account.dto';
import { CreateCardToShebaDto } from '../dtos/create-card-to-sheba.dto';
import { CreateFacilityNationalCodeDto } from '../dtos/create-facility-national-code.dto';
import { CreateShebaDetailDto } from '../dtos/create-sheba-detail.dto';
import { FacilityWithNationalCodeDto } from '../dtos/facility-with-national-code.dto';
import { GetBankCardDetailDto } from '../dtos/get-card-bank-detail.dto';
import { PreRequestTokenSmsDto } from '../dtos/pre-request-token-sms.dto';
import { ShebaDetailParam } from '../dtos/sheba-detail.dto';
import { VerifyRequestTokenSmsDto } from '../dtos/verify-request-token-sms.dto';
import { APiScopesEnum } from '../enums/scopes.enum';
import { BankCardDetailResponse } from '../interfaces/bank-card-detail.interface';
import { ConvertBankAccountToShebaResponse } from '../interfaces/convert-bank-sheba-response.interface';
import { ConvertCardToBankAccountResponse } from '../interfaces/convert-card-to-bank.interface';
import { IConvertCartToShebaParams } from '../interfaces/convert-card-to-sheba-param.interface';
import { ConvertCardToShebaResponse } from '../interfaces/convert-card-to-sheba-response.interface';
import { FacilityNationalCodeResponse } from '../interfaces/facility-national-code-response.interface';
import { PreREquestTokenSmsResponse } from '../interfaces/pre-request-token-sms-response.interface';
import { ShebaDetailParams } from '../interfaces/sheba-detail-param.interface';
import { ShebaDetailResponse } from '../interfaces/sheba-detail-response.interface';
import { AccountToShebaRepo } from '../repository/account-to-sheba.repository';
import { CardDetailRepo } from '../repository/card-detail.repository';
import { CardToAccountRepo } from '../repository/card-to-account.repository';
import { CardToShebaRepo } from '../repository/card-to-sheba.repository';
import { FacilityNationalCodeRepo } from '../repository/facility-national-code.repository';
import { ShebaDetailRepo } from '../repository/sheba-detail.repository';
import { RequestToken } from '../request.token';
import { baseUrl, getBankCartDetailApi, convertCartToShebaApi, getShebaDetailApi, convertCardToBankAccountApi, convertBankAccountToShebaApi, facilityWithNationalCode, banksInfo, preRequestTokenSms, verifyRequestTokenSms, confirmRequestTokenSms } from '../urls';



@Injectable()
export class FinooService {
  PREFIX_TOKEN_SMS_ = "PREFIX_TOKEN_SMS_"
  constructor(
    private reqToken: RequestToken,
    private cardDetailRepo: CardDetailRepo,
    private accountToShebaRepo: AccountToShebaRepo,
    private cardToAccountRepo: CardToAccountRepo,
    private cardToShebaRepo: CardToShebaRepo,
    private shebaDetailRepo: ShebaDetailRepo,
    private facilityNationalCodeRepo: FacilityNationalCodeRepo,
    private redisService: RedisService
  ) {
  }
  async getBankCartDetail(getBankCardDetailDto: GetBankCardDetailDto): Promise<BankCardDetailResponse> {
    try {
      const requestHeader =
      {
        Authorization: `Bearer ${this.reqToken.getToken}`
      }


      const sendRequest = await axios({ method: "GET", url: baseUrl + getBankCartDetailApi + getBankCardDetailDto.card_number, headers: requestHeader })

      if (sendRequest.status !== HttpStatus.OK)
        throw new AxiosRequestFailed()

      const sendReuqestData: BankCardDetailResponse = sendRequest.data
      if (sendReuqestData.error)
        return sendReuqestData.error

      const createCardDetailDto: CreateCardDetailDto = {
        bankName: sendRequest.data.result.bankName,
        card: String(getBankCardDetailDto.card_number),
        description: sendRequest.data.result.description,
        doTime: sendRequest.data.result.doTime,
        name: sendRequest.data.result.name,
        result: sendRequest.data.result.result,
        status: sendRequest.data.status,
        trackId: sendRequest.data.trackId
      }

      await this.cardDetailRepo.createEntity(createCardDetailDto);

      return sendReuqestData
    } catch (error) {
      console.log(error.response.data.error);
      throw new BadRequestException(error.response.data.error.message);
    }


  }

  async convertCardToSheba(convertCardToShebaParam: ConvertCardToShebaParam): Promise<any> {
    try {
      const requestParam: IConvertCartToShebaParams = {
        card: convertCardToShebaParam.card,
        trackId: convertCardToShebaParam.trackId,
        version: 2
      }

      const requestHeader = { Authorization: `Bearer ${this.reqToken.getToken}` }

      const sendRequest = await axios({ method: "GET", url: baseUrl + convertCartToShebaApi, params: requestParam, headers: requestHeader })
      if (sendRequest.status !== HttpStatus.OK)
        throw new AxiosRequestFailed()

      const convertCartToShebaData: ConvertCardToShebaResponse = sendRequest.data
      if (convertCartToShebaData.error)
        return convertCartToShebaData.error

      const createCardToShebaDto: CreateCardToShebaDto = {
        bankName: convertCartToShebaData.result.bankName,
        card: String(convertCartToShebaData.result.card),
        deposit: convertCartToShebaData.result.deposit,
        depositOwners: convertCartToShebaData.result.depositOwners,
        depositStatus: String(convertCartToShebaData.result.depositStatus),
        iban: convertCartToShebaData.result.IBAN,
        trackId: convertCartToShebaData.trackId
      }

      await this.cardToShebaRepo.createEntity(createCardToShebaDto);
      return convertCartToShebaData.result
    } catch (error) {
      console.log(error.response.data.error);
      throw new BadRequestException(error.response.data.error.message);
    }

  }

  async getShebaDetail(shebaDetailParam: ShebaDetailParam): Promise<any> {
    try {
      const requestParam: ShebaDetailParams = {
        iban: shebaDetailParam.iban,
        trackId: shebaDetailParam.trackId
      }

      const requestHeader = { Authorization: `Bearer ${this.reqToken.getToken}` }

      const sendRequest = await axios({ method: "GET", url: baseUrl + getShebaDetailApi, headers: requestHeader, params: requestParam })
      if (sendRequest.status !== HttpStatus.OK)
        throw new AxiosRequestFailed()

      const requestData: ShebaDetailResponse = sendRequest.data
      if (requestData.error)
        return requestData.error

      const name = JSON.stringify(sendRequest.data.result.depositOwners)
      const createShebaDetailDto: CreateShebaDetailDto = {
        bankName: requestData.result.bankName,
        deposit: requestData.result.deposit,
        depositComment: requestData.result.depositComment,
        depositDescription: requestData.result.depositDescription,
        depositOwners: requestData.result.depositOwners,
        depositStatus: requestData.result.depositStatus,
        errorDescription: requestData.result.errorDescription,
        iban: requestData.result.IBAN
      }
      await this.shebaDetailRepo.createEntity(createShebaDetailDto)

      return requestData.result
    } catch (error) {
      console.log(error.response.data.error);
      throw new BadRequestException(error.response.data.error.message);
    }

  }

  async convertCardToBankAccount(convertCardToBankAccountParam: ConvertCardToBankAccountParam): Promise<any> {
    try {
      const requestParam: ConvertCardToBankAccountParam = {
        card: convertCardToBankAccountParam.card,
        trackId: convertCardToBankAccountParam.trackId
      }
      console.log(convertCardToBankAccountParam);

      const requestHeader = { Authorization: `Bearer ${this.reqToken.getToken}` }

      const sendRequest = await axios({ method: "GET", url: baseUrl + convertCardToBankAccountApi, headers: requestHeader, params: requestParam })
      if (sendRequest.status !== HttpStatus.OK)
        throw new AxiosRequestFailed()

      const requestData: ConvertCardToBankAccountResponse = sendRequest.data
      if (requestData.error)
        return requestData.error

      const createCardtoAccountDto: CreateCardtoAccountDto = {
        card: String(convertCardToBankAccountParam.card),
        deposit: requestData.result.deposit,
        description: requestData.result.description,
        doTime: requestData.result.doTime,
        name: requestData.result.name,
        providerCod: requestData.result.providerCod,
        result: requestData.result.result,
        trackId: requestData.trackId
      }

      await this.cardToAccountRepo.createEntity(createCardtoAccountDto);
      return requestData.result

    } catch (error) {
      console.log(error.response.data.error);
      throw new BadRequestException(error.response.data.error.message);
    }

  }

  async convertBankAccountToSheba(convertBankAccountToShebaParam: ConvertBankAccountToShebaParam): Promise<any> {
    try {
      const requestParam: ConvertBankAccountToShebaParam =
      {
        bankCode: convertBankAccountToShebaParam.bankCode,
        deposit: convertBankAccountToShebaParam.deposit,
        trackId: convertBankAccountToShebaParam.trackId
      }

      const requestHeader = { Authorization: `Bearer ${this.reqToken.getToken}` }

      const request = await axios({ method: "GET", url: baseUrl + convertBankAccountToShebaApi, headers: requestHeader, params: requestParam })
      if (request.status !== HttpStatus.OK)
        throw new AxiosRequestFailed()

      const requestData: ConvertBankAccountToShebaResponse = request.data
      if (requestData.error)
        return requestData.error

      const createAccountToShebaDto: CreateAccountToShebaDto = {
        accountStatus: request.data.result.accountStatus,
        bankCode: convertBankAccountToShebaParam.bankCode,
        bankName: requestData.result.bankName,
        deposit: requestData.result.deposit,
        depositOwners: String(requestData.result.depositOwners),
        iban: request.data.result.iban,
        status: requestData.status,
        trackId: requestData.trackId
      }

      await this.accountToShebaRepo.createEntity(createAccountToShebaDto);
      return requestData
    } catch (error) {
      console.log(error.response.data.error);
      throw new BadRequestException(error.response.data.error.message);
    }

  }

  async facilityWithNationalCode(facilityWithNationalCodeDto: FacilityWithNationalCodeDto) {
    try {
      const getToken = await this.redisService.getKey(this.PREFIX_TOKEN_SMS_ + facilityWithNationalCodeDto.national_code);

      
      const requestHeader = {
        Authorization: `Bearer ${getToken.token}`
      }
      // const requestParam: FacilityWithNationalCodeDto = {
      //   birthDate: Buffer.from(facilityWithNationalCodeDto.birthDate).toString('base64'),
      //   fatherName: Buffer.from(facilityWithNationalCodeDto.fatherName).toString('base64'),
      //   firstName: Buffer.from(facilityWithNationalCodeDto.firstName).toString('base64'),
      //   fullName: Buffer.from(facilityWithNationalCodeDto.fullName).toString('base64'),
      //   gender: Buffer.from(facilityWithNationalCodeDto.gender).toString('base64'),
      //   lastName: Buffer.from(facilityWithNationalCodeDto.lastName).toString('base64'),
      // }
      const requestParam: FacilityWithNationalCodeDto = {
        birthDate: facilityWithNationalCodeDto.birthDate,
        fatherName: facilityWithNationalCodeDto.fatherName,
        firstName: facilityWithNationalCodeDto.firstName,
        fullName: facilityWithNationalCodeDto.fullName,
        gender: facilityWithNationalCodeDto.gender,
        lastName: facilityWithNationalCodeDto.lastName,
      }
      

      const request = await axios({
        method: "GET", url: baseUrl + facilityWithNationalCode + facilityWithNationalCodeDto.national_code + '/sms/nidVerification',
        headers: requestHeader,
        params: requestParam
      })

      const requestData: FacilityNationalCodeResponse = request.data;

      const createFacilityNationalCodeDto: CreateFacilityNationalCodeDto = {
        birthDate: request.data.result.birthDate,
        deathStatus: request.data.result.deathStatus,
        national_code: request.data.result.nationalCode,
        fatherName: request.data.result.fatherName,
        firstName: request.data.result.firstName,
        firstNameSimilarity: request.data.result.firstNameSimilarity,
        fullName: request.data.result.fullName,
        fullNameSimilarity: request.data.result.fullNameSimilarity,
        gender: request.data.result.gender,
        lastName: request.data.result.lastName,
        lastNameSimilarity: request.data.result.lastNameSimilarity
      }
      await this.facilityNationalCodeRepo.createEntity(createFacilityNationalCodeDto);

      return requestData;
      
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response.data.error.code == 'SERVER_ERROR')
        throw new InternalServerErrorException();
      throw new BadRequestException(error.response.data.error.message);

    }

  }


  async preRequestTokenSms(mobile: string) {
    try {
      const requestHeader =
      {
        Content_type: 'application/json',
        Authorization: `Basic ${process.env.FINOTECH_AUTH_TOKEN}`
      }

      const requestParam: PreRequestTokenSmsDto = {
        auth_type: 'SMS',
        client_id: process.env.FINOTECH_CLIENT_ID,
        mobile: mobile,
        redirect_uri: process.env.FINOTECH_REDIRECT_URI,
        response_type: 'code',
        scope: APiScopesEnum.FACILITYSMS,
      }



      const request = await axios({
        method: "GET",
        url: baseUrl + preRequestTokenSms,
        params: requestParam,
        headers: requestHeader
      })
      const requestData: PreREquestTokenSmsResponse = request.data
      return requestData
    } catch (error) {
      console.log(error.response.data.error);
      throw new BadRequestException(error.response.data.error.message);
    }
  }

  async verifyRequestTokenSms(verifyRequestTokenSmsDto: VerifyRequestTokenSmsDto) {
    try {

      const requestHeader =
      {
        Content_type: 'application/json',
        Authorization: `Basic ${process.env.FINOTECH_AUTH_TOKEN}`
      }

      const request = await axios({
        headers: requestHeader,
        method: "POST",
        url: baseUrl + verifyRequestTokenSms,
        data: verifyRequestTokenSmsDto
      })
      await this.reqToken.confirmRequestTokenSms(request.data.result.code, verifyRequestTokenSmsDto.nid)
      return request.data

    } catch (error) {
      console.log(error.response.data.error);
      throw new BadRequestException(error.response.data.error.message);
    }
  }

  
}