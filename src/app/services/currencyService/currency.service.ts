import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = 'http://data.fixer.io/api/'
  accessKey = '5e1bbb5f6e691f34faa346d75198063d'

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

getHistoricatRates(date:string,from:string,to:string):Observable<any>{
  return this.http.get<any>(`${this.baseUrl}${date}?access_key=${this.accessKey}&base=${from}&symbols=${to}`)
}

}


