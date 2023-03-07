import { ApiProperty } from "@nestjs/swagger"

export class CreateShebaDetailDto {
    @ApiProperty()
    iban: string

    @ApiProperty()
    bankName: string

    @ApiProperty()
    deposit: string

    @ApiProperty()
    depositDescription: string

    @ApiProperty()
    depositComment: string

    @ApiProperty()
    depositStatus: string

    @ApiProperty()
    errorDescription: string

    @ApiProperty()
    depositOwners: ShebaDetailDepositOwner[]
}

export class ShebaDetailDepositOwner {
    firstName: string;
    lastName: string;
  }