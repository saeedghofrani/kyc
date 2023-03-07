import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import { DataSource, DataSourceOptions } from "typeorm";
import { checkDatabase, createDatabase } from "typeorm-extension";
const defaultDatabaseOptions = {
    // logger: new DatabaseLogger(),
    synchronize: process.env.DB_SYNCHRONIZE === 'true' || false,
    migrationsTableName: 'migrations',
};

export const OrmConfigModulePostgres= {
    useFactory:async () => {
        const options:TypeOrmModuleOptions={
            name: 'connection_postgres',
            type: 'postgres',
            host:process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT),
            entities: [ 
                'dist/**/*.entity.js',
                '**/*.entity.js'
            ],
            synchronize: Boolean(process.env.DB_SYNCHRONIZE),
            autoLoadEntities: true,
        }
  
        const dataSourceOptions:DataSourceOptions={
          type: 'postgres',
          host:process.env.DB_HOST,
          database: process.env.DB_DATABASE,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          port: Number(process.env.DB_PORT),
          migrations: [
            'dist/migrations/*{.ts,.js}',
        ],
          migrationsTableName:'updatePostTable1672484099418',
          migrationsRun:true
          
      }
  
      if(!(await checkDatabase({options:dataSourceOptions})).exists){
          createDatabase({options:dataSourceOptions}).then((res)=>{
              console.log('Database created successfully')
          }).catch((err)=>{
              console.log(err)
          })
      }
  
      return options;
          
      },

      
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },

}

