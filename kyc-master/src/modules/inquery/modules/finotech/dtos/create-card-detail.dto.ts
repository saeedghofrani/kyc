import { ApiProperty } from "@nestjs/swagger"

export class CreateCardDetailDto{ 
    @ApiProperty()
    trackId: string

    @ApiProperty()
    card: string

    @ApiProperty()
    name: string

    @ApiProperty()
    result: string

    @ApiProperty()
    description: string

    @ApiProperty()
    doTime: string

    @ApiProperty()
    bankName: string

    @ApiProperty()
    status: string
}