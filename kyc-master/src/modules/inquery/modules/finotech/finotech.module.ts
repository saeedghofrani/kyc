import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HandlerModule } from 'src/utility/handler/handler.module';
import { RedisModule } from 'src/utility/redis/redis.module';
import { AccountToShebaEnt } from './entities/acount-to-sheba.entity';
import { CardDetailEnt } from './entities/card-detail.entity';
import { CardToAccountEnt } from './entities/card-to-account.entity';
import { CardToShebaEnt } from './entities/card-to-sheba.entity';
import { FacilityNationalCodeEnt } from './entities/facility-national-code.entity';
import { ShebaDetailEnt } from './entities/sheba-detail.entity';
import { AccountToShebaRepo } from './repository/account-to-sheba.repository';
import { CardDetailRepo } from './repository/card-detail.repository';
import { CardToAccountRepo } from './repository/card-to-account.repository';
import { CardToShebaRepo } from './repository/card-to-sheba.repository';
import { FacilityNationalCodeRepo } from './repository/facility-national-code.repository';
import { ShebaDetailRepo } from './repository/sheba-detail.repository';
import { RequestToken } from './request.token';
import { FinooService } from './services/finotech.service';

@Module({
  imports:[
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      CardDetailEnt,
      AccountToShebaEnt,
      CardToAccountEnt,
      CardToShebaEnt,
      ShebaDetailEnt,
      FacilityNationalCodeEnt
    ]),
    HandlerModule,
    RedisModule.forRoot(process.env.REDIS_HOST,parseInt(process.env.REDIS_PORT))
  ],
  providers: [
    FinooService,
    RequestToken,
    CardDetailRepo,
    AccountToShebaRepo,
    CardToAccountRepo,
    CardToShebaRepo,
    ShebaDetailRepo,
    FacilityNationalCodeRepo
  ],
  exports: [FinooService],
})
export class FinotechModule {}