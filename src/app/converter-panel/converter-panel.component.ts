import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() conversion = new EventEmitter<CurrencyConversion>()
  
  currencyConversion: CurrencyConversion = {

    from: 'EUR',
    to: 'USD'
  }

  constructor(private currenyService: CurrencyService, private router: Router) { }

  ngOnInit(): void {
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
    // Access Restricted - Your current Subscription Plan does not support this API Function.
    // this.currenyService.convert(this.currencyConversion.from,this.currencyConversion.to, 
    //   this.currencyConversion.amount ? this.currencyConversion.amount : 1).subscribe((res: any) => {
    //     this.convertedValue = res.result
    // })
    this.rate = this.currencies[this.currencyConversion.to] / this.currencies[this.currencyConversion.from]
    if (this.currencyConversion.amount) {
      this.convertedValue = this.rate * this.currencyConversion.amount
    }
    this.conversion.emit(this.currencyConversion)
  }

  redirectToDetails() {
    this.router.navigate(['/details'])   
    this.conversion.emit(this.currencyConversion)
  }

  isActiveRoute(path:string){
    return this.router.isActive(path,true)

  }
}
