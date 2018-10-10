import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss']
})
export class CustomSearchComponent {
  query;

  constructor(private route: Router) {}

  search(query) {
    this.route.navigate(['/search', query]);
  }
}
