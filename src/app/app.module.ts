import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorefrontModule } from '@spartacus/storefront';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StorefrontModule.withConfig({
      server: {
        baseUrl: 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
