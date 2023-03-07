import { SchemaEntityEnum } from "src/common/enums/schema.entity.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: SchemaEntityEnum.AUTH, name: "sheba-detail" })
export class ShebaDetailEnt {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    iban: string

    @Column()
    bankName: string

    @Column()
    deposit: string

    @Column()
    depositDescription: string

    @Column()
    depositComment: string

    @Column()
    depositStatus: string

    @Column()
    errorDescription: string

    @Column('simple-json', {nullable: true})
    depositOwners: {
     firstName: string,
     lastName: string
    }[]
}