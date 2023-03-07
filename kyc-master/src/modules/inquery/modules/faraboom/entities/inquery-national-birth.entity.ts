import { SchemaEntityEnum } from "src/common/enums/schema.entity.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: SchemaEntityEnum.AUTH, name: "inquery_national_birth" })
export class InqueryNationalBirthEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    national_code: string

    @Column()
    birth_date: string

    @Column()
    match: boolean
}