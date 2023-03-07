import { Module } from '@nestjs/common';
import { TranslateService } from './translate.service';
import { join } from "path";
import * as path from 'path';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from "nestjs-i18n";
import { HeaderResolver } from './tools/resolver/header.resolver';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      fallbacks:{
        'EN': 'en-US'
      },
      formatter: (template: string,...args: any[]) => template,
      loaderOptions: {
        path: path.join(__dirname, '/tools/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: HeaderResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
  ],
  providers: [TranslateService] ,
  exports : [TranslateService]
})
export class TranslateModule {}
