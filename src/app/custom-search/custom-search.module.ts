import { NgModule } from '@angular/core';
import { CustomSearchComponent } from './custom-search.component';
import { SearchBoxModule } from '@spartacus/storefront';

@NgModule({
  imports: [SearchBoxModule],
  declarations: [CustomSearchComponent],
  exports: [CustomSearchComponent]
})
export class CustomSearchModule {}
