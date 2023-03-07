import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { HandlerService } from "src/utility/handler/handler.service";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateFacilityNationalCodeDto } from "../dtos/create-facility-national-code.dto";
import { FacilityNationalCodeEnt } from "../entities/facility-national-code.entity";

export class FacilityNationalCodeRepo extends AbstractRepositoryClass<
FacilityNationalCodeEnt,
CreateFacilityNationalCodeDto,
CreateFacilityNationalCodeDto
>{
    constructor(dataSource: DataSource, handlerService: HandlerService){
        super(dataSource, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<FacilityNationalCodeEnt> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreateFacilityNationalCodeDto, query?: QueryRunner): Promise<FacilityNationalCodeEnt> {
        const facilityNationalCodeEnt = new FacilityNationalCodeEnt()
        facilityNationalCodeEnt.birthDate = createDto.birthDate
        facilityNationalCodeEnt.fullName = createDto.fullName 
        facilityNationalCodeEnt.firstName = createDto.firstName
        facilityNationalCodeEnt.lastName = createDto.lastName 
        facilityNationalCodeEnt.gender = createDto.gender 
        facilityNationalCodeEnt.fatherName = createDto.fatherName
        facilityNationalCodeEnt.national_code = createDto.national_code
        facilityNationalCodeEnt.deathStatus = createDto.deathStatus
        facilityNationalCodeEnt.fullNameSimilarity = createDto.fullNameSimilarity
        facilityNationalCodeEnt.firstNameSimilarity = createDto.firstNameSimilarity
        facilityNationalCodeEnt.lastNameSimilarity = createDto.lastNameSimilarity
        if(query) return await query.manager.save(facilityNationalCodeEnt)
        return await this.dataSource.manager.save(facilityNationalCodeEnt)    
    }
    _updateEntity(entity: FacilityNationalCodeEnt, updateDto: CreateFacilityNationalCodeDto, query?: QueryRunner): Promise<FacilityNationalCodeEnt> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: FacilityNationalCodeEnt, query?: QueryRunner): Promise<FacilityNationalCodeEnt> {
        throw new Error("Method not implemented.");
    }
    
}