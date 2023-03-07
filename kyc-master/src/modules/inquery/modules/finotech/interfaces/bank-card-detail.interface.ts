export class BankCardDetailResponse {
    trackId: string;
    result?: BankCardDetailResult;
    status: string;
    error?:any
  }
  
  export interface BankCardDetailResult {
    destCard: string;
    name: string;
    result: string;
    description: string;
    doTime: string;
  }