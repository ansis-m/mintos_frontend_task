import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencySelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
