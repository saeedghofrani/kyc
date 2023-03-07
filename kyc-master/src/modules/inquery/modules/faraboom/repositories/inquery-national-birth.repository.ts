import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateBirthNationalMatchDto } from "../dtos/create-birth-national-match.dto";
import { CreateInqueryBirthDto } from "../dtos/create-inquery-birth.dto";
import { InqueryNationalBirthEntity } from "../entities/inquery-national-birth.entity";
import { HandlerService } from './../../../../../utility/handler/handler.service';

export class InqueryNationalBirthRepo extends AbstractRepositoryClass<
    InqueryNationalBirthEntity,
    CreateBirthNationalMatchDto,
    CreateBirthNationalMatchDto

> {
    constructor(dataSource: DataSource, handlerService: HandlerService) {
        super(dataSource, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<InqueryNationalBirthEntity> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreateBirthNationalMatchDto, query?: QueryRunner): Promise<InqueryNationalBirthEntity> {
        const birthNational = new InqueryNationalBirthEntity();
        birthNational.national_code = createDto.national_code;
        birthNational.birth_date = createDto.birth_date;
        birthNational.match = createDto.match;
        if (query) return await query.manager.save(birthNational);
        return await this.dataSource.manager.save(birthNational);
    }
    _updateEntity(entity: InqueryNationalBirthEntity, updateDto: CreateBirthNationalMatchDto, query?: QueryRunner): Promise<InqueryNationalBirthEntity> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: InqueryNationalBirthEntity, query?: QueryRunner): Promise<InqueryNationalBirthEntity> {
        throw new Error("Method not implemented.");
    }


    async findInquery(createInqueryBirthDto: CreateInqueryBirthDto): Promise<InqueryNationalBirthEntity[]> {
        return await this.dataSource.manager.find(InqueryNationalBirthEntity,
            { where: {
                national_code: createInqueryBirthDto.national,
                birth_date: createInqueryBirthDto.birth_date
            }})

    }

}