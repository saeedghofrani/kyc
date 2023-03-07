import { ApiHideProperty } from "@nestjs/swagger";

export class ConfirmRequestTokenSmsDto {
    @ApiHideProperty()
    grant_type: string 
    code: string
    auth_type: string
    redirect_uri: string
}