import { SchemaEntityEnum } from "src/common/enums/schema.entity.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: SchemaEntityEnum.AUTH, name: "acount_to_sheba" })
export class AccountToShebaEnt {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    deposit: string

    @Column()
    accountStatus: string

    @Column()
    iban: string

    @Column()
    depositOwners: string

    @Column()
    bankName: string

    @Column()
    bankCode: string

    @Column()
    trackId: string

    @Column()
    status: string

}