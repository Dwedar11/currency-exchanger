import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currencyService/currency.service';
import { CurrencyConversion } from '../interfaces/currencyConversion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss']
})
export class ConverterPanelComponent implements OnInit {

  currencies: any
  convertedValue: number
  rate: number

  currencyConversion: CurrencyConversion = {

    from: 'EUR',
    to: 'USD'
  }

  constructor(private currenyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {

    this.currenyService.getConversion().subscribe(res => {
      this.currencyConversion = res
    })

    this.currenyService.getCurrencies().subscribe((res: any) => {
      this.currencies = res.rates


    })
  }

  swap() {
    let temp = this.currencyConversion.from
    this.currencyConversion.from = this.currencyConversion.to
    this.currencyConversion.to = temp
  }

  convert() {
    // this.currenyService.convert(this.from,this.to,this.amount).subscribe((res: any) => {
    //   this.convertedValue = res.result
    // })
    this.rate = this.currencies[this.currencyConversion.to] / this.currencies[this.currencyConversion.from]
    if (this.currencyConversion.amount) {
      this.convertedValue = this.rate * this.currencyConversion.amount
    }
  }

  redirectToDetails() {
    this.currenyService.updateConversion(this.currencyConversion)
    this.router.navigate(['/details'])
  }

}
