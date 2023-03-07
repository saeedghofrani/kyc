import { Module } from "@nestjs/common";
import { InqueryModule } from "../modules/faraboom/inquery.module";
import { FinotechModule } from "../modules/finotech/finotech.module";
import { FaraboomController } from "./controllers/faraboom.controller";
import { FinooController } from "./controllers/finotech.controller";

@Module({
    imports: [InqueryModule, FinotechModule],
    controllers:[FaraboomController, FinooController]
})

export class InqueryCoreModule{}