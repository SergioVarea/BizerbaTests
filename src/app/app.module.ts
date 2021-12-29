import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Trasnlate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Shell
import { BizPublicShellModule } from './public/public-shell/public-shell.module';

// Views
import { BizCurrenciesViewModule } from './public/views/currencies/currencies-view.module';
import { BizDatesViewModule } from './public/views/dates/dates-view.module';
import { BizHomeViewModule } from './public/views/home/home-view.module';
import { BizTranslationsViewModule } from './public/views/translations/translations-view.module';

// Shared
import { LANGUAGES } from './shared/constants';
import { PipesModule } from './shared/pipes/pipes.module';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

function getDefaultLanguage(): string {
  const clientLanguage = navigator.language;
  return LANGUAGES.has(clientLanguage) ? clientLanguage : 'en';
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Public
    BizPublicShellModule,
    // Views
    BizCurrenciesViewModule,
    BizDatesViewModule,
    BizHomeViewModule,
    BizTranslationsViewModule,
    // Translate
    TranslateModule.forRoot({
      defaultLanguage: getDefaultLanguage(),
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
