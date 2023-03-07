import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { InqueryNationalPhoneRepo } from './../repositories/inquery-national-phone.repository';
import InqueryShebaUtility from "../utility/inquery-accounting.utility";
import InqueryMobileUtility from "../utility/inquery-mobile.utility";
import InquiryNationalUtility from "../utility/inquery-national.utility";
import { HandlerService } from 'src/utility/handler/handler.service';
import { CreateInqueryMobileDto } from '../dtos/create-inquery-mobile.dto';
import { CreatePhoneNationalMatchDto } from '../dtos/create-phone-national-match.dto';
import { InqueryNationalPhoneEntity } from '../entities/inquery-national-phone.entity';
import { AbstractServiceClass } from 'src/common/abstract/abstract.service.class';

@Injectable()
export class InqueryNationalPhoneService extends AbstractServiceClass<
InqueryNationalPhoneEntity,
CreatePhoneNationalMatchDto,
CreatePhoneNationalMatchDto
> {
    
    inquiryNationalUtility: InquiryNationalUtility
    inqueryAccountingUtility: InqueryShebaUtility
    inqueryMobileUtility: InqueryMobileUtility

    constructor(
        private inqueryNationalPhoneRepo: InqueryNationalPhoneRepo,
        handlerService: HandlerService,
        dataSource: DataSource
    ) {
        super(dataSource, handlerService)
    }

    async createPhoneWithMath(createPhoneNationalMatchDto: CreatePhoneNationalMatchDto, queryRunner?: QueryRunner): Promise<InqueryNationalPhoneEntity> {
        if (queryRunner)
            return await this.inqueryNationalPhoneRepo.createEntity(createPhoneNationalMatchDto, queryRunner);
        return await this.inqueryNationalPhoneRepo.createEntity(createPhoneNationalMatchDto, queryRunner);
    }

    async findInquery(createInqueryMobileDto: CreateInqueryMobileDto, identification: string): Promise<InqueryNationalPhoneEntity[]> {
        return await this.inqueryNationalPhoneRepo.findInquery(createInqueryMobileDto, identification);
    }

    protected _getOne(searchDto: string, options?: FindOneOptions<any>) {
        throw new Error('Method not implemented.');
    }
    _resultGetOneDto(ent: InqueryNationalPhoneEntity) {
        throw new Error('Method not implemented.');
    }
    protected _create(createDt: CreatePhoneNationalMatchDto, query?: QueryRunner) {
        throw new Error('Method not implemented.');
    }
    _resultCreateDto(ent: InqueryNationalPhoneEntity) {
        throw new Error('Method not implemented.');
    }
    protected _delete(searchDto: string, query?: QueryRunner) {
        throw new Error('Method not implemented.');
    }
    _resultDeleteDto(ent: InqueryNationalPhoneEntity) {
        throw new Error('Method not implemented.');
    }
    protected _update(role_Id: string, updateDt: CreatePhoneNationalMatchDto, query?: QueryRunner) {
        throw new Error('Method not implemented.');
    }
    _resultUpdateDto(ent: InqueryNationalPhoneEntity) {
        throw new Error('Method not implemented.');
    }
    
}