import { SchemaEntityEnum } from "src/common/enums/schema.entity.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: SchemaEntityEnum.AUTH, name: "card-to-account" })
export class CardToAccountEnt {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    deposit: string

    @Column()
    doTime: string

    @Column()
    providerCod: string

    @Column()
    description: string

    @Column()
    result: string

    @Column()
    name: string

    @Column()
    card: string

    @Column()
    trackId: string

}