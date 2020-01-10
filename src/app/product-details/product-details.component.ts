import { Component } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: 'product-details.component.html'
})

export class ProductDetailsComponent {
  public title: string;

  constructor() {
    this.title = 'Product details';
  }
}
