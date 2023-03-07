import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { HandlerService } from "src/utility/handler/handler.service";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateCardToShebaDto } from "../dtos/create-card-to-sheba.dto";
import { CardToShebaEnt } from "../entities/card-to-sheba.entity";

export class CardToShebaRepo extends AbstractRepositoryClass<
CardToShebaEnt,
CreateCardToShebaDto,
CreateCardToShebaDto
>{
    constructor(dataSource: DataSource, handlerService: HandlerService){
        super(dataSource, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<CardToShebaEnt> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreateCardToShebaDto, query?: QueryRunner): Promise<CardToShebaEnt> {
        const cardToShebaEnt = new CardToShebaEnt()
        cardToShebaEnt.bankName = createDto.bankName;
        cardToShebaEnt.card = createDto.card;
        cardToShebaEnt.deposit = createDto.deposit;
        cardToShebaEnt.depositOwners = createDto.depositOwners;
        cardToShebaEnt.depositStatus = createDto.depositStatus;
        cardToShebaEnt.iban = createDto.iban;
        cardToShebaEnt.trackId = createDto.trackId;
        if(query) return await query.manager.save(cardToShebaEnt);
        return await this.dataSource.manager.save(cardToShebaEnt);
    }
    _updateEntity(entity: CardToShebaEnt, updateDto: CreateCardToShebaDto, query?: QueryRunner): Promise<CardToShebaEnt> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: CardToShebaEnt, query?: QueryRunner): Promise<CardToShebaEnt> {
        throw new Error("Method not implemented.");
    }
    
}