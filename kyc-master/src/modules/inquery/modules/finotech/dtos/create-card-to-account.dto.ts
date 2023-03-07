import { ApiProperty } from "@nestjs/swagger"

export class CreateCardtoAccountDto {
    @ApiProperty()
    deposit: string

    @ApiProperty()
    doTime: string

    @ApiProperty()
    providerCod: string

    @ApiProperty()
    description: string

    @ApiProperty()
    result: string

    @ApiProperty()
    name: string

    @ApiProperty()
    card: string

    @ApiProperty()
    trackId: string
}