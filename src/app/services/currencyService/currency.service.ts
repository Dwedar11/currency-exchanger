import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { CurrencyConversion } from 'src/app/interfaces/currencyConversion';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = 'http://data.fixer.io/api/'
  accessKey = '7e74ba7d8e19f2eb71e8be3d061c23ea'

  private conversion = new Subject<CurrencyConversion>()
  currentConversion = this.conversion.asObservable();

  constructor(private http: HttpClient) { }
  getCurrencies() {
    return this.http.get(`${this.baseUrl}latest?access_key=${this.accessKey}`)

  }

  convert(from: string, to: string, amount: number) {
    return this.http.get(`${this.baseUrl}convert?access_key=${this.accessKey}&from=${from}&to=${to}&amount=${amount}`)
  }

  getConversion() {
    return this.currentConversion
  }
  updateConversion(currencyConversion: CurrencyConversion) {
    this.conversion.next(currencyConversion)

  }
}


