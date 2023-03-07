export class ConvertCardToShebaResponse {
    trackId:string
    status:string
    result?:ConvertCardToShebaResult
    error?:any
  }
  
  export class ConvertCardToShebaResult {
    IBAN:string
    bankName:string
    deposit:string
    card:number
    depositStatus:number
    depositOwners:string
  }