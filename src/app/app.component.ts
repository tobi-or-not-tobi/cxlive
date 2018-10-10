import { Component } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pdpOutlets = ProductDetailOutlets;
  detailImage;
}
