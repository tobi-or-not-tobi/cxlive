import { NgModule } from '@angular/core';
import { CustomSearchComponent } from './custom-search.component';
import { SearchBoxModule } from '@spartacus/storefront';
import { SpeechComponent } from './speech/speech.component';

@NgModule({
  imports: [SearchBoxModule, SearchBoxModule],
  declarations: [CustomSearchComponent, SpeechComponent],
  exports: [CustomSearchComponent]
})
export class CustomSearchModule {}
