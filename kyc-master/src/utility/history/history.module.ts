import { Module } from '@nestjs/common';
import { HistoryService } from './service/history.service';
import { MongoModule } from "../mongo/mongo.module";
import { Connection } from "mongoose";

@Module({
  imports :[
    MongoModule.forRoot(process.env.MONGO_HOST, Number(process.env.MONGO_PORT), process.env.MONGO_NAME)
    // MongooseModule.forRoot('mongodb://localhost/test')
  ] ,
  providers:[HistoryService],
  exports :[HistoryService]
})
export class HistoryModule {}
