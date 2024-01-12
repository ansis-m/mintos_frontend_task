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

  selectedCurrencies: string[] = [];


  unselectCurrency(unselectedCurrency: string) {
    this.selectedCurrencies = this.selectedCurrencies.filter(selectedCurrency => selectedCurrency !== unselectedCurrency);
    this.currencies.forEach(currency => {
      if (currency.abbreviation === unselectedCurrency) {
        currency.checked = false;
      }
    })
  }

  selectCurrency(selectedCurrency: currency) {
    selectedCurrency.checked = !selectedCurrency.checked;

    if (selectedCurrency.checked) {
      !this.selectedCurrencies.includes(selectedCurrency.abbreviation) && this.selectedCurrencies.push(selectedCurrency.abbreviation);
    } else {
      this.selectedCurrencies = this.selectedCurrencies.filter(currency => currency === selectedCurrency.abbreviation);
    }

  }
}

export interface currency {
  abbreviation: string;
  checked: boolean;
}
