import { Component, OnInit } from '@angular/core';
import { CurrencyConversion } from './interfaces/currencyConversion';
import { Route, Router } from '@angular/router';
import { CurrencyService } from './services/currencyService/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currencyConversion: CurrencyConversion 
  title = 'currency-exchanger';
  symbols: any

  constructor(private router: Router, private currencyservice: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyservice.getSymbols().subscribe((res: any) => {
      this.symbols = res.symbols
    })
  }

  onConversion(event: CurrencyConversion) {
    this.currencyConversion = event
  }

  isActiveRoute(path: string) {
    return this.router.isActive(path, true)
  }
}
