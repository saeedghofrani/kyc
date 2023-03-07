import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";

export class PreRequestTokenSmsDto {
    @ApiHideProperty()
    client_id: string

    @ApiHideProperty()
    response_type: string

    @ApiHideProperty()
    redirect_uri: string

    @ApiHideProperty()
    scope: string

    @ApiHideProperty()
    mobile: string

    @ApiHideProperty()
    auth_type: string

}