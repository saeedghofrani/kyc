import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { SwaggerService } from "./config/swagger/service/swagger.service";
import {
  Logger as NestLogger
} from "@nestjs/common";
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
async function bootstrap() {
  const nestLogger = new NestLogger('Main_Logger');
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.useGlobalFilters(new HttpExceptionFilter());
  const swaggerConfig = app.get<SwaggerService>(SwaggerService);
  swaggerConfig.init(app)
  const port=process.env.APP_PORT
  await app.listen(port).then(async () => {
    nestLogger.log(`Running`, 'Swagger');
    nestLogger.log(`http://127.0.0.1:${port}/api/v1`, 'Running Server');
    nestLogger.log(`http://127.0.0.1:${port}/${swaggerConfig.preFix}`, 'Running Swagger');
  });
}
bootstrap();
