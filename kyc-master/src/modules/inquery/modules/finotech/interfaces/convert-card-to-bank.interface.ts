export class ConvertCardToBankAccountResponse {
    result: ConvertCardToBankAccountResult;
    status: string;
    trackId: string;
    error:any
  }
  
  export class ConvertCardToBankAccountResult {
    destCard: string
    name: string
    result: string
    description: string
    doTime: string
    deposit: string
    providerCod: string
  }

  
  
  
