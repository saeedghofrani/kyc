import { SchemaEntityEnum } from "src/common/enums/schema.entity.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: SchemaEntityEnum.AUTH, name: "card-to-sheba" })
export class CardToShebaEnt {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    deposit: string

    @Column()
    depositStatus: string

    @Column()
    bankName: string

    @Column()
    depositOwners: string

    @Column()
    card: string

    @Column()
    trackId: string

    @Column()
    iban: string

}