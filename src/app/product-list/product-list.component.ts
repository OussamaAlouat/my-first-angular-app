
import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  title = 'Products';
  public products: any[];

  constructor() {
    this.products = [
      {
        name: 'Phone XL'
      },
      {
        name: 'Phone Mini'
      },
      {
        name: 'Phone Standard'
      },
    ];
  }
}
