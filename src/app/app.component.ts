import { Component } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cxlive';
  pdpOutlets = ProductDetailOutlets;
}
