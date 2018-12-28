import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { StorefrontModule } from '@spartacus/storefront';
import { CustomSearchModule } from './custom-search/custom-search.module';
@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    StorefrontModule.withConfig({
      server: {
        baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com'
      }
    }),
    CustomSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
