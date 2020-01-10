import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
