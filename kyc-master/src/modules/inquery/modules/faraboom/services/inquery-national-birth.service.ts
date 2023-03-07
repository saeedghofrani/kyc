import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { AbstractServiceClass } from 'src/common/abstract/abstract.service.class';
import { HandlerService } from 'src/utility/handler/handler.service';
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateBirthNationalMatchDto } from '../dtos/create-birth-national-match.dto';
import { CreateInqueryBirthDto } from '../dtos/create-inquery-birth.dto';
import { InqueryNationalBirthEntity } from '../entities/inquery-national-birth.entity';
import InqueryShebaUtility from "../utility/inquery-accounting.utility";
import InqueryMobileUtility from "../utility/inquery-mobile.utility";
import InquiryNationalUtility from "../utility/inquery-national.utility";
import { InqueryNationalBirthRepo } from './../repositories/inquery-national-birth.repository';

@Injectable()
export class InqueryNationalBirthService extends AbstractServiceClass<
InqueryNationalBirthEntity,
CreateBirthNationalMatchDto,
CreateBirthNationalMatchDto
> {
    inquiryNationalUtility: InquiryNationalUtility
    inqueryAccountingUtility: InqueryShebaUtility
    inqueryMobileUtility: InqueryMobileUtility

    constructor(
        private inqueryNationalBirthRepo: InqueryNationalBirthRepo,
        handlerService: HandlerService,
        dataSource: DataSource
    ) {
        super(dataSource, handlerService)
    }

    async createWithMath(createBirthNationalMatchDto: CreateBirthNationalMatchDto, queryRunner?: QueryRunner): Promise<InqueryNationalBirthEntity> {
        if (queryRunner)
        return await this.inqueryNationalBirthRepo.createEntity(createBirthNationalMatchDto, queryRunner);
        return await this.inqueryNationalBirthRepo.createEntity(createBirthNationalMatchDto);
    }

    async findInquery(createInqueryBirthDto: CreateInqueryBirthDto): Promise<InqueryNationalBirthEntity[]> {
        return await this.inqueryNationalBirthRepo.findInquery(createInqueryBirthDto);
    }

    protected _getOne(searchDto: string, options?: FindOneOptions<any>) {
        throw new Error('Method not implemented.');
    }
    _resultGetOneDto(ent: InqueryNationalBirthEntity) {
        throw new Error('Method not implemented.');
    }
    protected _create(createDt: CreateBirthNationalMatchDto, query?: QueryRunner) {
        throw new Error('Method not implemented.');
    }
    _resultCreateDto(ent: InqueryNationalBirthEntity) {
        throw new Error('Method not implemented.');
    }
    protected _delete(searchDto: string, query?: QueryRunner) {
        throw new Error('Method not implemented.');
    }
    _resultDeleteDto(ent: InqueryNationalBirthEntity) {
        throw new Error('Method not implemented.');
    }
    protected _update(role_Id: string, updateDt: CreateBirthNationalMatchDto, query?: QueryRunner) {
        throw new Error('Method not implemented.');
    }
    _resultUpdateDto(ent: InqueryNationalBirthEntity) {
        throw new Error('Method not implemented.');
    }
}
