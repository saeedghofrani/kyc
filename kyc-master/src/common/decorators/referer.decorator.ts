import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import {Request} from "express"
const parser = require('ua-parser-js')

export const RefererDecorator = createParamDecorator(
    (data:any, ctx:ExecutionContext) => {
        const req:Request = ctx.switchToHttp().getRequest();
        const referer = req.get("Referer");
        console.log(referer);
        return referer
    }
)