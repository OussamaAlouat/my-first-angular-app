import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
@Component({
  selector: 'product-details',
  templateUrl: 'product-details.component.html'
})

export class ProductDetailsComponent implements OnInit{
  public title: string;
  public product;

  constructor(
    private route:ActivatedRoute,
  ) {
    this.title = 'Product details';
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
    })
  }
}
