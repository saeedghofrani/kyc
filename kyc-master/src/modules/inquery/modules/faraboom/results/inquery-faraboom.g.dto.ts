import { ApiProperty } from "@nestjs/swagger";
import { InqueryFaraboomPartialDto } from "../dtos/inquery-faraboom-partial.dto";


export class InqueryFaraboomGResult {

    @ApiProperty()
    operation_time: number;


    @ApiProperty()
    match: boolean;

    constructor(init?: Partial<InqueryFaraboomPartialDto>) {
        this.operation_time = init.operation_time;
        this.match = init.match;
    }
}
