import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithCheckboxComponent } from './button-with-checkbox.component';

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
});
