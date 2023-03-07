import { ApiProperty } from "@nestjs/swagger"

export class CreateCardToShebaDto {
    @ApiProperty()
    deposit: string

    @ApiProperty()
    depositStatus: string

    @ApiProperty()
    bankName: string

    @ApiProperty()
    depositOwners: string

    @ApiProperty()
    card: string

    @ApiProperty()
    trackId: string

    @ApiProperty()
    iban: string
}