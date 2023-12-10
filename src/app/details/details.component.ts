import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js'
import { CurrencyService } from '../services/currencyService/currency.service';
import { CurrencyConversion } from '../interfaces/currencyConversion';
import { Observable, forkJoin, map } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  title = 'angular-chart';
  @Input() currencyConversion: CurrencyConversion;
  rates: number[] = [];

  constructor(private currencyService: CurrencyService) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    let subscriptions: Observable<any>[] = [];

    for (let month = 0; month < 12; month++) {
      let todayDate = new Date();
      let year = todayDate.getFullYear() - 1;
      let day = new Date(year, month + 1, 0).getDate();
      let date = new Date(year, month, day);
      let dateString = date.toISOString().slice(0, 10);

      let historicalRatesSubscription = this.currencyService.getHistoricatRates(dateString, this.currencyConversion.from, this.currencyConversion.to).pipe(
        map((res: any) => {
          this.rates.push(res.rates[this.currencyConversion.to]);
        })
      )

      subscriptions.push(historicalRatesSubscription);
    }

    forkJoin(subscriptions).subscribe(res => {
      // Line Chart
      const lineCanvasEle: any = document.getElementById('line_chart')
      const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'august', 'September', 'October', 'November', 'December'],
          datasets: [
            { data: this.rates, label: `${this.currencyConversion.from}-${this.currencyConversion.to}`, borderColor: 'rgba(54, 162, 235)' },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
  }
}
