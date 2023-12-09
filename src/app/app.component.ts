import { Component } from '@angular/core';
import { CurrencyConversion } from './interfaces/currencyConversion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currencyConversion: CurrencyConversion
  title = 'currency-exchanger';

  onConversion(event: CurrencyConversion) {
    this.currencyConversion = event

  }

}
