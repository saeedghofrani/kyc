import { ApiProperty } from "@nestjs/swagger";

export class FacilityWithNationalCodeDto {
    @ApiProperty()
    trackId?: string

    @ApiProperty()
    birthDate: string

    @ApiProperty()
    fullName?: string

    @ApiProperty()
    firstName?: string

    @ApiProperty()
    lastName?: string

    @ApiProperty()
    gender?: string

    @ApiProperty()
    fatherName?: string

    @ApiProperty()
    national_code?: string
}