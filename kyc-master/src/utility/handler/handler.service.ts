import { BadRequestException, Injectable } from "@nestjs/common";

import { TranslateService } from "../translate/translate.service";


@Injectable()
export class HandlerService {
  constructor(private translateService : TranslateService) {
  }

  async handlerException400(lang :string , exception : Record<string, any>) {
    if (exception.key) {

      throw new BadRequestException( exception)
    } else {
      const errResult = await this.translateService.translateError(exception.section , exception.value , lang)
      throw new BadRequestException(errResult)

    }
  }

}
