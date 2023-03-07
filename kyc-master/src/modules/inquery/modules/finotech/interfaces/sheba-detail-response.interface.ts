export class ShebaDetailResponse {
    trackId: string;
    result?: ShebaDetailResult;
    status: string;
    error?:any
  }
  export class ShebaDetailResult {
    IBAN: string;
    bankName: string;
    deposit: string;
    depositDescription: string;
    depositComment: string;
    depositOwners: ShebaDetailDepositOwner[];
    depositStatus: string;
    errorDescription: string;
  }
  
  export class ShebaDetailDepositOwner {
    firstName: string;
    lastName: string;
  }