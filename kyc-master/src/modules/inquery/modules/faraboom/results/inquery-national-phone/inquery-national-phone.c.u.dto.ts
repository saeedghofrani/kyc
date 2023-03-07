import { ApiProperty } from "@nestjs/swagger";
import { InqueryNationalPhoneEntity } from "../../entities/inquery-national-phone.entity";


export class InqueryNationalPhoneCUDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    national_code: string;

    @ApiProperty()
    phone_number: string;

    @ApiProperty()
    match: boolean;

    constructor(init?: Partial<InqueryNationalPhoneEntity>) {
        this.id = init.id;
        this.national_code = init.national_code;
        this.phone_number = init.phone_number;
        this.match = init.match;

}
}