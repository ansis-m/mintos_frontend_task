import {Component} from '@angular/core';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent {

  currencies: currency[] = [
    {abbreviation: 'EUR', checked: false},
    {abbreviation: 'PLN', checked: false},
    {abbreviation: 'GEL', checked: false},
    {abbreviation: 'DKK', checked: false},
    {abbreviation: 'CZK', checked: false},
    {abbreviation: 'GBP', checked: false},
    {abbreviation: 'SEK', checked: false},
    {abbreviation: 'USD', checked: false},
    {abbreviation: 'RUB', checked: false}
  ];

  get selectedCurrencies(): currency[] {
    return this.currencies.filter(currency => currency.checked);
  }

}

export interface currency {
  abbreviation: string;
  checked: boolean;
}
