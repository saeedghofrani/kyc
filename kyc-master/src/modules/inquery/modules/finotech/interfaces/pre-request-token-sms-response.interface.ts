export class PreREquestTokenSmsResponse {
    result: resultTokenSms

    status: string
}

export class resultTokenSms {
    smsSent: boolean
    trackId: string
}