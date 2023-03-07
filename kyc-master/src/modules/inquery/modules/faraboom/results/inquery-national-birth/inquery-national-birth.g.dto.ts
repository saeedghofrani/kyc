import { ApiProperty } from "@nestjs/swagger";
import { InqueryNationalBirthEntity } from "../../entities/inquery-national-birth.entity";


export class InqueryBirthGDto {

    @ApiProperty()
    id: string

    @ApiProperty()
    national_code: string

    @ApiProperty()
    birth_date: string

    @ApiProperty()
    match: boolean




    constructor(init?: Partial<InqueryNationalBirthEntity>) {
        this.id = init.id;
        this.national_code = init.national_code;

        this.birth_date = init.birth_date;
        this.match = init.match;

    }


}

