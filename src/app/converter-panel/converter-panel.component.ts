import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currencyService/currency.service';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss']
})
export class ConverterPanelComponent implements OnInit {
  amount: number
  currencies: any
  from: string = 'EUR'
  to: string = 'USD'
  convertedValue: number
  rate: number
  constructor(private currenyService: CurrencyService) { }

  ngOnInit(): void {
    this.currenyService.getCurrencies().subscribe((res: any) => {
      this.currencies = res.rates
    })
  }

  swap() {
    let temp = this.from
    this.from = this.to
    this.to = temp
  }

  convert() {
    // this.currenyService.convert(this.from,this.to,this.amount).subscribe((res: any) => {
    //   this.convertedValue = res.result
    // })
    this.rate = this.currencies[this.to] / this.currencies[this.from]
    this.convertedValue = this.rate * this.amount
  }

}
