import { ApiProperty } from "@nestjs/swagger"

export class CreateAccountToShebaDto {
    @ApiProperty()
    deposit: string

    @ApiProperty()
    accountStatus: string

    @ApiProperty()
    iban: string

    @ApiProperty()
    depositOwners: string

    @ApiProperty()
    bankName: string

    @ApiProperty()
    bankCode: string

    @ApiProperty()
    trackId: string

    @ApiProperty()
    status: string

}