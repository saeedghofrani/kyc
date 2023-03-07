import { registerAs } from "@nestjs/config";

export default registerAs('construc', () => ({
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
  synchronize :true
  }));