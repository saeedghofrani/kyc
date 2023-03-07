import { SchemaEntityEnum } from "src/common/enums/schema.entity.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: SchemaEntityEnum.AUTH, name: "card-detail" })
export class CardDetailEnt {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    trackId: string

    @Column()
    card: string

    @Column()
    name: string

    @Column()
    result: string

    @Column()
    description: string

    @Column()
    doTime: string

    @Column()
    bankName: string

    @Column()
    status: string
}