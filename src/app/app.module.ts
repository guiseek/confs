import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import localeBrExtra from '@angular/common/locales/extra/br';
import localeBr from '@angular/common/locales/pt';
import {
  registerLocaleData,
  DATE_PIPE_DEFAULT_TIMEZONE,
} from '@angular/common';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRouting } from './app-routing';

registerLocaleData(localeBr, 'pt-BR', localeBrExtra);

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRouting,
  ],
  providers: [
    ...environment.providers,
    [
      { provide: DATE_PIPE_DEFAULT_TIMEZONE, useValue: '-3' },
      { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
      { provide: LOCALE_ID, useValue: 'pt-BR' },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
