import { ApiProperty } from "@nestjs/swagger";

export class VerifyRequestTokenSmsDto {
    @ApiProperty()
    mobile: string

    @ApiProperty()
    otp: string
    
    @ApiProperty()
    nid: string

    @ApiProperty()
    trackId: string
}