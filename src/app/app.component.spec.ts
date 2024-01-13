import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CurrencySelectorComponent} from "./currency-selector/currency-selector.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, CurrencySelectorComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
