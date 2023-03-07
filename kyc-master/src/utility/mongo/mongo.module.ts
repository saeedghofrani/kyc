import { Module, DynamicModule } from '@nestjs/common';
import { MongoService } from './mongo.service';
import  mongoose from "mongoose";

@Module({
  providers: [MongoService]
})
export class MongoModule {
  static forRoot(host: string, port: number, dbName: string): DynamicModule {
    return {
      imports: [],
      module: MongoModule,
      providers: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`mongodb://${host}:${port}/${dbName}`),
        },
        MongoService,
      ],
      exports: [
        {
          provide: 'DATABASE_CONNECTION',
          useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`mongodb://${host}:${port}/${dbName}`),
        },
        MongoService,
      ],
    };
  }
}
