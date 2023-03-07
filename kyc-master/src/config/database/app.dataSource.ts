import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  name: 'connection_postgres',
  type: 'postgres',
  host:process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database:process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [
    'dist/**/*.entity.js',
    '**/*.entity.js'
],
migrations: [
    'dist/migrations/*{.ts,.js}',
],
  synchronize: Boolean(process.env.DB_SYNCHRONIZE),
  logging: true,
  
});
let datasource: DataSource;
export const ConnectDB = async() => {
  datasource = await AppDataSource.initialize();
}
