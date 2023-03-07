export class ConvertBankAccountToShebaResponse {
    result?: ConvertBankAccountToShebaResult;
    status: string;
    trackId: string;
    error?:any
  }
  
  export class ConvertBankAccountToShebaResult {
    IBAN: string;
    deposit: string;
    bankName: string;
    depositDescription: string;
    depositStatus: string;
    depositOwners: ConvertBankAccountToShebaResultDepositOwner[];
    depositComment: string;
  }
  
  export class ConvertBankAccountToShebaResultDepositOwner {
    firstName: string;
    lastName: string;
  }