import { HttpModule } from "@nestjs/axios";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { HandlerModule } from 'src/utility/handler/handler.module';
import { InqueryNationalBirthEntity } from './entities/inquery-national-birth.entity';
import { InqueryNationalPhoneEntity } from './entities/inquery-national-phone.entity';
import { InqueryNationalPhoneService } from './services/inquery-national-phone.service';
import { InqueryNationalBirthService } from './services/inquery-national-birth.service';
import { FaraboomService } from './services/faraboom.service';
import { InqueryNationalBirthRepo } from "./repositories/inquery-national-birth.repository";
import { InqueryNationalPhoneRepo } from "./repositories/inquery-national-phone.repository";


@Module({
  imports: [TypeOrmModule.forFeature([InqueryNationalBirthEntity, InqueryNationalPhoneEntity]), HttpModule, HandlerModule],
  providers: [FaraboomService, InqueryNationalBirthService, InqueryNationalPhoneService, InqueryNationalBirthRepo, InqueryNationalPhoneRepo],
  exports: [InqueryNationalBirthService, InqueryNationalPhoneService, FaraboomService],
})
export class InqueryModule {}
