import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateInqueryMobileDto } from "../dtos/create-inquery-mobile.dto";
import { CreatePhoneNationalMatchDto } from "../dtos/create-phone-national-match.dto";
import { InqueryNationalPhoneEntity } from "../entities/inquery-national-phone.entity";
import { HandlerService } from './../../../../../utility/handler/handler.service';

export class InqueryNationalPhoneRepo extends AbstractRepositoryClass<
InqueryNationalPhoneEntity,
CreatePhoneNationalMatchDto,
CreatePhoneNationalMatchDto
>{
    constructor(dataSource: DataSource, handlerService: HandlerService){
        super(dataSource, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<InqueryNationalPhoneEntity> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreatePhoneNationalMatchDto, query?: QueryRunner): Promise<InqueryNationalPhoneEntity> {
        const inqueryNationalPhoneEntity = new InqueryNationalPhoneEntity();
        inqueryNationalPhoneEntity.national_code = createDto.national_code;
        inqueryNationalPhoneEntity.phone_number = createDto.phone_number;
        inqueryNationalPhoneEntity.match = createDto.match;
        if(query) return await query.manager.save(inqueryNationalPhoneEntity)
        return await this.dataSource.manager.save(inqueryNationalPhoneEntity);
    }
    _updateEntity(entity: InqueryNationalPhoneEntity, updateDto: CreatePhoneNationalMatchDto, query?: QueryRunner): Promise<InqueryNationalPhoneEntity> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: InqueryNationalPhoneEntity, query?: QueryRunner): Promise<InqueryNationalPhoneEntity> {
        throw new Error("Method not implemented.");
    }
    
    async findInquery(createInqueryMobileDto: CreateInqueryMobileDto, identification: string): Promise<InqueryNationalPhoneEntity[]> {
        return await this.dataSource.manager.find(InqueryNationalPhoneEntity,{
            where: {
                national_code: identification,
                phone_number: createInqueryMobileDto.phone_number 
            }})
    }
}