import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { HandlerService } from "src/utility/handler/handler.service";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateCardtoAccountDto } from "../dtos/create-card-to-account.dto";
import { CardToAccountEnt } from "../entities/card-to-account.entity";

export class CardToAccountRepo extends AbstractRepositoryClass<
CardToAccountEnt,
CreateCardtoAccountDto,
CreateCardtoAccountDto
>{
    constructor(dataSource: DataSource, handlerService: HandlerService){
        super(dataSource, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<CardToAccountEnt> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreateCardtoAccountDto, query?: QueryRunner): Promise<CardToAccountEnt> {
        const cardToAccountEnt = new CardToAccountEnt()
        cardToAccountEnt.card = createDto.card;
        cardToAccountEnt.deposit = createDto.deposit;
        cardToAccountEnt.description =  createDto.description;
        cardToAccountEnt.doTime = createDto.doTime;
        cardToAccountEnt.name = createDto.name;
        cardToAccountEnt.providerCod = createDto.providerCod;
        cardToAccountEnt.result = createDto.result;
        cardToAccountEnt.trackId = createDto.trackId;
        if(query) return await query.manager.save(cardToAccountEnt);
        return await this.dataSource.manager.save(cardToAccountEnt);
    }
    _updateEntity(entity: CardToAccountEnt, updateDto: CreateCardtoAccountDto, query?: QueryRunner): Promise<CardToAccountEnt> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: CardToAccountEnt, query?: QueryRunner): Promise<CardToAccountEnt> {
        throw new Error("Method not implemented.");
    }
    
}