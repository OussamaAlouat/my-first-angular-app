
import { Component } from '@angular/core';
import { products } from './../products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  title = 'Products';
  public products: any[];

  constructor() {
    this.products = products;
  }

  share(product) {
    window.alert(product.name + ' will be shared');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');

  }
}
