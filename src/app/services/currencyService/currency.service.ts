import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = 'http://data.fixer.io/api/'
  accessKey = '7e74ba7d8e19f2eb71e8be3d061c23ea'

  constructor(private http: HttpClient) { }

  getCurrencies():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}latest?access_key=${this.accessKey}`)

  }

  convert(from: string, to: string, amount: number) :Observable<any> {
    return this.http.get<any>(`${this.baseUrl}convert?access_key=${this.accessKey}&from=${from}&to=${to}&amount=${amount}`)
  }

  getSymbols():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}symbols?access_key=${this.accessKey}`)
  }
}


