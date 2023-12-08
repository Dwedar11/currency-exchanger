import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = 'http://data.fixer.io/api/'
  accessKey = '7e74ba7d8e19f2eb71e8be3d061c23ea'

  constructor(private http: HttpClient) { }
  getCurrencies() {
    return this.http.get(`${this.baseUrl}latest?access_key=${this.accessKey}`)
    

  }


}

 
  
