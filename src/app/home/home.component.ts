import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  mostPopularCurr: string[] = [
    'EUR', 'USD', 'GBP', 'JPY', 'CAD', 'CHF', 'AUD', 'CNY', 'HKD'
  ]

}


