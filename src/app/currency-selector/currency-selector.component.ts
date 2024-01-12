import {Component} from '@angular/core';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent {

  currencies: currency[] = [
    {abbreviation: 'EUR', selected: false},
    {abbreviation: 'PLN', selected: false},
    {abbreviation: 'GEL', selected: false},
    {abbreviation: 'DKK', selected: false},
    {abbreviation: 'CZK', selected: false},
    {abbreviation: 'GBP', selected: false},
    {abbreviation: 'SEK', selected: false},
    {abbreviation: 'USD', selected: false},
    {abbreviation: 'RUB', selected: false}
  ];

  selectedCurrencies: currency[] = [];


  unselectCurrency(unselectedCurrency: currency) {
    unselectedCurrency.selected = false;
    this.selectedCurrencies = this.selectedCurrencies.filter(currency => currency !== unselectedCurrency);
  }

  toggleCurrency(selectedCurrency: currency) {
    selectedCurrency.selected = !selectedCurrency.selected;

    if (selectedCurrency.selected) {
      !this.selectedCurrencies.includes(selectedCurrency) && this.selectedCurrencies.push(selectedCurrency);
    } else {
      this.selectedCurrencies = this.selectedCurrencies.filter(currency => currency !== selectedCurrency);
    }

  }
}

export interface currency {
  abbreviation: string;
  selected: boolean;
}
