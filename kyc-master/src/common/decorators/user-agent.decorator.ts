import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import {Request} from "express"
import { UserAgnetInterface } from "../interface/user-agent.interface";
const parser = require('ua-parser-js')

export const userAgent = createParamDecorator(
    (data:any, ctx:ExecutionContext) => {
        const req:Request = ctx.switchToHttp().getRequest();
        const userAgent:UserAgnetInterface = parser(req.get("user-agent"));
        return userAgent
    }
)