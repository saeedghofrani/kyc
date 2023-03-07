import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigurationModule } from 'src/config/app/app-config.module';
import { TranslateModule } from 'src/utility/translate/translate.module';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SwaggerModule } from '../../config/swagger/swagger.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { createDatabase, DatabaseCreateContext,checkDatabase } from 'typeorm-extension';
import { updatePostTable1672484099418 } from 'src/migrations/1672484099418-update-post-table';
import { OrmConfigModulePostgres } from 'src/config/database/common-type-orm.config';
import { MongoModule } from 'src/utility/mongo/mongo.module';
import { HistoryModule } from 'src/utility/history/history.module';
import { InqueryCoreModule } from '../inquery/inquery-core/inquery-core.module';

@Module({
  imports: [
    SwaggerModule,
    TranslateModule,
    ConfigurationModule,
    HistoryModule,
    MongoModule,
    InqueryCoreModule,
    TypeOrmModule.forRootAsync(OrmConfigModulePostgres),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
