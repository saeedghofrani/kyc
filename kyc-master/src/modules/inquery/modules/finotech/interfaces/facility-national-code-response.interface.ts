export class FacilityNationalCodeResponse {
    responseCode: string
    trackId: string
    result:resultFacilityNationalCode
    status: string
}

export class resultFacilityNationalCode {
    fullName?: string
    firstName?: string
    lastName?: string
    gender?: string
    fatherName?: string
    national_code: string
    deathStatus: string
    fullNameSimilarity?: number
    firstNameSimilarity?: number
    lastNameSimilarity?: number
    birthDate: string
}