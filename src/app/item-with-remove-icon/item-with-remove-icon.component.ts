import {Component, EventEmitter, Input, Output} from '@angular/core';
import {currency} from "../currency-selector/currency-selector.component";

@Component({
  selector: 'app-item-with-remove-icon',
  templateUrl: './item-with-remove-icon.component.html',
  styleUrls: ['./item-with-remove-icon.component.css']
})
export class ItemWithRemoveIconComponent {
  @Input()
  currency: currency = {abbreviation: "USD", selected: false};

  @Output()
  unselectEvent = new EventEmitter<currency>();
}
