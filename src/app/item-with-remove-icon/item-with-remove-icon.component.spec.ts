import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWithRemoveIconComponent } from './item-with-remove-icon.component';
import {By} from "@angular/platform-browser";

describe('ItemWithRemoveIconComponent', () => {
  let component: ItemWithRemoveIconComponent;
  let fixture: ComponentFixture<ItemWithRemoveIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWithRemoveIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemWithRemoveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct currency abbreviation', () => {
    component.currency = { abbreviation: 'EUR', selected: false };
    fixture.detectChanges();

    const abbreviationSpan = fixture.debugElement.query(By.css('.selected-font')).nativeElement;
    expect(abbreviationSpan.textContent).toContain('eur');
  });

  it('should emit unselectEvent with currency on icon click', () => {
    spyOn(component.unselectEvent, 'emit');
    component.currency = { abbreviation: 'EUR', selected: true };
    fixture.detectChanges();

    const removeIcon = fixture.debugElement.query(By.css('.round-icon')).nativeElement;
    removeIcon.click();

    expect(component.unselectEvent.emit).toHaveBeenCalledWith(component.currency);
  });

});
