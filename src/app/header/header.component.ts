import { Component, EventEmitter, Output } from '@angular/core';
import { CurrencyConversion } from '../interfaces/currencyConversion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() conversion = new EventEmitter<CurrencyConversion>();

  constructor(private router: Router) { }

  redirectToDetails(from: string, to: string) {
    let currencyConversion: CurrencyConversion = {
      from: from,
      to: to
    }

    this.router.navigate(['/details']);
    this.conversion.emit(currencyConversion);
  }
}
