import { Injectable } from "@nestjs/common";
import { MigrationInterface, QueryRunner } from "typeorm";

@Injectable()
export class updatePostTable1672484099418 implements MigrationInterface{
    name?: 'updatePostTable1672484099418';
    transaction?: boolean;
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('CREATE SCHEMA "AUTH";')
        await queryRunner.query('CREATE SCHEMA "BLOCKCHAIN";')
        await queryRunner.query('CREATE SCHEMA "CURRENCY";')
        await queryRunner.query('CREATE SCHEMA "LOCATION";')
        await queryRunner.query('CREATE SCHEMA "PUBLIC";')
    }
    down(queryRunner: QueryRunner): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}