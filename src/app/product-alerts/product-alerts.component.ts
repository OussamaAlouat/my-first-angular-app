import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: 'product-alerts.component.html'
})

export class ProductAlertsComponent {
  @Input() product;
  @Output() notify = new EventEmitter();

  onNotify() {
    this.notify.emit()
  }
}
