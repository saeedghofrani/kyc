import { BadRequestException } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { PublicEnum } from '../dictionary/enums/public.enum';


export class HandlerError {
  constructor() {}
  private static handlerQueryFailedError(err: QueryFailedError) {
    if (err.driverError) {
      
      }
    
  }
  private static handlerStringError(err: String) {
    // if (err.indexOf('Validate TransferContract error, balance is not sufficient') != -1)
    // return { section: "chain", value: ChainEnum.BALANCE_IS_NOT_SUFFICIENT }
  }

  private static handlerError(err: Error) {
    if (err.name == 'AddressError') {
      return { section: 'public', value: PublicEnum.IP_ADDRESS_ERROR };
    } else if (err.name == 'Error') return JSON.parse(err.message);
  }
  private static handlerBadException(err: BadRequestException) {
    return err.getResponse();
  }
  private static axiosErrorException(err: BadRequestException) {
    return { section: 'public', value: PublicEnum.AXIOS_ERROR };
  }

  static async errorHandler(err: any) {
    console.log('+++++++++++++++++++++++++++++++++');
    console.log(err);
    if (err.constructor.name == 'QueryFailedError')
      return this.handlerQueryFailedError(err);
    if (err.constructor.name == 'String') return this.handlerStringError(err);
    if (err.constructor.name == 'Error') return this.handlerError(err);
    if (err.constructor.name == 'BadRequestException')
      return this.handlerBadException(err);
    if (err.constructor.name == 'AxiosError')
      return this.axiosErrorException(err);
  }
}
