import { Component } from '@angular/core';
import { CurrencyConversion } from './interfaces/currencyConversion';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private router:Router){
}
  currencyConversion: CurrencyConversion
  title = 'currency-exchanger';
  

  onConversion(event: CurrencyConversion) {
    this.currencyConversion = event

  }

  
  
  isActiveRoute(path: string) {
    return this.router.isActive(path, true)
  }


}
