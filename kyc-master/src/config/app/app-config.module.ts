import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfiguration from '../configs/app-configuration';


@Module({
    imports:[ConfigModule.forRoot({
        envFilePath: ['.debug.env'],
        load:[appConfiguration],
        isGlobal: true
    })],
})
export class ConfigurationModule {}