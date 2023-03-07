import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { HandlerService } from "src/utility/handler/handler.service";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateShebaDetailDto } from "../dtos/create-sheba-detail.dto";
import { ShebaDetailEnt } from "../entities/sheba-detail.entity";

export class ShebaDetailRepo extends AbstractRepositoryClass<
ShebaDetailEnt,
CreateShebaDetailDto,
CreateShebaDetailDto
> {
    constructor(dataSouce: DataSource, handlerService: HandlerService){
        super(dataSouce, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<ShebaDetailEnt> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreateShebaDetailDto, query?: QueryRunner): Promise<ShebaDetailEnt> {
        const shebaDetailEnt = new ShebaDetailEnt()
        shebaDetailEnt.bankName = createDto.bankName;
        shebaDetailEnt.deposit = createDto.deposit;
        shebaDetailEnt.depositComment = createDto.depositComment;
        shebaDetailEnt.depositDescription = createDto.depositDescription;
        shebaDetailEnt.depositOwners = createDto.depositOwners;
        shebaDetailEnt.depositStatus = createDto.depositStatus;
        shebaDetailEnt.errorDescription = createDto.errorDescription;
        shebaDetailEnt.iban = createDto.iban;
        if(query) return await query.manager.save(shebaDetailEnt);
        return await this.dataSource.manager.save(shebaDetailEnt);
    }
    _updateEntity(entity: ShebaDetailEnt, updateDto: CreateShebaDetailDto, query?: QueryRunner): Promise<ShebaDetailEnt> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: ShebaDetailEnt, query?: QueryRunner): Promise<ShebaDetailEnt> {
        throw new Error("Method not implemented.");
    }
}