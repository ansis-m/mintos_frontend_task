import {Component, EventEmitter, Input, Output} from '@angular/core';
import {currency} from "../currency-selector/currency-selector.component";

@Component({
  selector: 'app-button-with-checkbox',
  templateUrl: './button-with-checkbox.component.html',
  styleUrls: ['./button-with-checkbox.component.css']
})
export class ButtonWithCheckboxComponent {
  @Input()
  currency: currency = {abbreviation: 'USD', checked: false};

  @Output()
  selectCurrency = new EventEmitter<currency>();

}
