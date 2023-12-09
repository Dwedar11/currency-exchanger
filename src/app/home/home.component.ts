import { Component, Input, OnInit } from '@angular/core';
import { CurrencyConversion } from '../interfaces/currencyConversion';
import { CurrencyService } from '../services/currencyService/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rates: any
  @Input() currencyConversion: CurrencyConversion
  mostPopularCurr: string[] = [
    'EUR', 'USD', 'GBP', 'JPY', 'CAD', 'CHF', 'AUD', 'CNY', 'HKD'
  ]

  constructor(private currencyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((res: any) => {
      this.rates = res.rates
    })
  }

  getPopularCurr(currency: string) {
    if (this.rates) {
      let rate = this.rates[currency] / this.rates[this.currencyConversion?.from]
      if (this.currencyConversion?.amount) {
        return rate * this.currencyConversion.amount
      }
    }
    return 0
  }

}
