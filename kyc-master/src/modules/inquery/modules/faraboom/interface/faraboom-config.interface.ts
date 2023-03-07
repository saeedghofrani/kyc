import { TypeBankEnum } from '../enums/type-bank.enum';

export interface FaraboomConfigInterface {
  method?: string;
  url?: string;
  headers?: {
    'Accept-Language'?: string;
    'App-Key'?: string;
    'Token-Id'?: string;
    'Device-Id'?: string;
    'CLIENT-DEVICE-ID'?: string;
    'CLIENT-IP-ADDRESS'?: string;
    'CLIENT-USER-AGENT'?: string;
    'CLIENT-USER-ID'?: string;
    'CLIENT-PLATFORM-TYPE'?: string;
    'BANK-ID'?: TypeBankEnum;
    'Content-Type'?: string;
  };
  data?: string;
}
