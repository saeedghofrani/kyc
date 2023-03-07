import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { HandlerService } from "src/utility/handler/handler.service";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateCardDetailDto } from "../dtos/create-card-detail.dto";
import { CardDetailEnt } from "../entities/card-detail.entity";

export class CardDetailRepo extends AbstractRepositoryClass<
CardDetailEnt,
CreateCardDetailDto,
CreateCardDetailDto
>{
    constructor(dataSource: DataSource,handlerService: HandlerService){
        super(dataSource, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<CardDetailEnt> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreateCardDetailDto, query?: QueryRunner): Promise<CardDetailEnt> {
        const cardDetailEnt = new CardDetailEnt()
        cardDetailEnt.bankName = createDto.bankName;
        cardDetailEnt.card = createDto.card;
        cardDetailEnt.description = createDto.description;
        cardDetailEnt.doTime = createDto.doTime;
        cardDetailEnt.name = createDto.name;
        cardDetailEnt.result = createDto.result;
        cardDetailEnt.status = createDto.status;
        cardDetailEnt.trackId = createDto.trackId;
        if(query) return await query.manager.save(cardDetailEnt);
        return await this.dataSource.manager.save(cardDetailEnt);
    }
    _updateEntity(entity: CardDetailEnt, updateDto: CreateCardDetailDto, query?: QueryRunner): Promise<CardDetailEnt> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: CardDetailEnt, query?: QueryRunner): Promise<CardDetailEnt> {
        throw new Error("Method not implemented.");
    }
    
}