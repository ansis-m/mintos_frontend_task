import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithCheckboxComponent } from './button-with-checkbox.component';
import {By} from "@angular/platform-browser";

describe('ButtonWithCheckboxComponent', () => {
  let component: ButtonWithCheckboxComponent;
  let fixture: ComponentFixture<ButtonWithCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWithCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the currency input', () => {
    component.currency = { abbreviation: 'EUR', selected: false };
    fixture.detectChanges();

    const spanElement = fixture.debugElement.query(By.css('.currency-font')).nativeElement;
    expect(spanElement.textContent).toContain('EUR');
  });

  it('should emit selectCurrency event on button click', () => {
    spyOn(component.selectCurrency, 'emit');
    const button = fixture.debugElement.query(By.css('.custom-button')).nativeElement;

    button.click();
    fixture.detectChanges();

    expect(component.selectCurrency.emit).toHaveBeenCalledWith(component.currency);
  });

  it('should apply custom-button-selected class when currency is selected', () => {
    component.currency = { abbreviation: 'USD', selected: true };
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('.custom-button'));
    expect(button.classes['custom-button-selected']).toBeTrue();
  });
});
