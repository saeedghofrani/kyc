import { AbstractRepositoryClass } from "src/common/abstract/abstract.repository.class";
import { HandlerService } from "src/utility/handler/handler.service";
import { DataSource, FindOneOptions, QueryRunner } from "typeorm";
import { CreateAccountToShebaDto } from "../dtos/create-account-to-sheba.dto";
import { AccountToShebaEnt } from "../entities/acount-to-sheba.entity";

export class AccountToShebaRepo extends AbstractRepositoryClass<
AccountToShebaEnt,
CreateAccountToShebaDto,
CreateAccountToShebaDto
>{
    constructor(dataSource: DataSource, handlerService: HandlerService){
        super(dataSource, handlerService)
    }
    _findOneEntity(searchDto: string, options?: FindOneOptions<any>): Promise<AccountToShebaEnt> {
        throw new Error("Method not implemented.");
    }
    async _createEntity(createDto: CreateAccountToShebaDto, query?: QueryRunner): Promise<AccountToShebaEnt> {
        const accountToShebaEnt = new AccountToShebaEnt();
        accountToShebaEnt.accountStatus = createDto.accountStatus;
        accountToShebaEnt.bankCode = createDto.bankCode;
        accountToShebaEnt.bankName = createDto.bankName;
        accountToShebaEnt.deposit = createDto.deposit;
        accountToShebaEnt.depositOwners = createDto.depositOwners;
        accountToShebaEnt.iban = createDto.iban;
        accountToShebaEnt.trackId = createDto.trackId;
        accountToShebaEnt.status = createDto.status
        if(query) return await query.manager.save(accountToShebaEnt);
        return await this.dataSource.manager.save(accountToShebaEnt);
    }
    _updateEntity(entity: AccountToShebaEnt, updateDto: CreateAccountToShebaDto, query?: QueryRunner): Promise<AccountToShebaEnt> {
        throw new Error("Method not implemented.");
    }
    _deleteEntity(entity: AccountToShebaEnt, query?: QueryRunner): Promise<AccountToShebaEnt> {
        throw new Error("Method not implemented.");
    }
    
}