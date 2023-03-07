import {ApiProperty} from "@nestjs/swagger";
import {Allow} from "class-validator";
import {TypeBankEnum} from "../enums/type-bank.enum";

export class CreateInqueryShebaDto {
    @ApiProperty()
    @Allow()
    sheba:string

    @ApiProperty()
    @Allow()
    national_code:string

    @ApiProperty({enum:TypeBankEnum})
    @Allow()
    typeBankEnum: TypeBankEnum
}