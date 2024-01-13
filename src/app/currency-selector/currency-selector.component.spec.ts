import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySelectorComponent } from './currency-selector.component';
import {ButtonWithCheckboxComponent} from "../button-with-checkbox/button-with-checkbox.component";
import {ItemWithRemoveIconComponent} from "../item-with-remove-icon/item-with-remove-icon.component";
import {By} from "@angular/platform-browser";

describe('CurrencySelectorComponent', () => {
  let component: CurrencySelectorComponent;
  let fixture: ComponentFixture<CurrencySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencySelectorComponent, ButtonWithCheckboxComponent, ItemWithRemoveIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initial State', () => {
    it('should have correct initial currencies and selectedCurrencies', () => {
      expect(component.currencies.length).toBe(9);
      expect(component.selectedCurrencies.length).toBe(0);
    });
  });

  describe('Toggle Currency', () => {
    it('should select a currency when toggled from unselected', () => {
      const testCurrency = component.currencies[0];
      component.toggleCurrency(testCurrency);
      expect(testCurrency.selected).toBeTrue();
      expect(component.selectedCurrencies.includes(testCurrency)).toBeTrue();
    });

    it('should unselect a currency when toggled from selected', () => {
      const testCurrency = component.currencies[0];
      component.toggleCurrency(testCurrency);
      component.toggleCurrency(testCurrency);
      expect(testCurrency.selected).toBeFalse();
      expect(component.selectedCurrencies.includes(testCurrency)).toBeFalse();
    });
  });

  describe('Unselect Currency', () => {
    it('should remove a currency from selectedCurrencies when unselected', () => {
      const testCurrency = component.currencies[0];
      testCurrency.selected = true;
      component.selectedCurrencies = [testCurrency];
      component.unselectCurrency(testCurrency);
      expect(testCurrency.selected).toBeFalse();
      expect(component.selectedCurrencies.includes(testCurrency)).toBeFalse();
    });

    it('should not throw error if called with currency that is not selected', () => {
      const testCurrency = component.currencies[0];
      testCurrency.selected = false;
      component.selectedCurrencies = [];
      component.unselectCurrency(testCurrency);
      expect(testCurrency.selected).toBeFalse();
      expect(component.selectedCurrencies.includes(testCurrency)).toBeFalse();
    });
  });

  it('should render all currencies', () => {
    const currencyElems = fixture.debugElement.queryAll(By.css('.grid-container .grid-item'));
    expect(currencyElems.length).toBe(9);
  });

  it('should render all currencies and selected items', () => {
    component.currencies[0].selected = true;
    component.selectedCurrencies = [component.currencies[0]];
    fixture.detectChanges();
    const selectedCurrencyElems = fixture.debugElement.queryAll(By.css('.grid-container .grid-item'));
    expect(selectedCurrencyElems.length).toBe(1 + 9);
  });

  it('should call toggleCurrency when a currency button is clicked', () => {
    spyOn(component, 'toggleCurrency');
    const buttonComponent = fixture.debugElement.query(By.directive(ButtonWithCheckboxComponent));
    const button = buttonComponent.query(By.css('.custom-button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.toggleCurrency).toHaveBeenCalled();
  });

  it('should call unselectCurrency when a currency item is clicked', () => {
    spyOn(component, 'unselectCurrency');
    const testCurrency = component.currencies[0];
    component.toggleCurrency(testCurrency);
    fixture.detectChanges();
    const itemComponent = fixture.debugElement.query(By.directive(ItemWithRemoveIconComponent));
    const roundIcon = itemComponent.query(By.css('.round-icon'));
    roundIcon.triggerEventHandler('click', null);
    expect(component.unselectCurrency).toHaveBeenCalled();
  });
});
