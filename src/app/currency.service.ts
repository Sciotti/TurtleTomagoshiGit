// currency.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currencyAmount: number = 0;
  private currencyAmountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.startCounting();
  }

  getCurrencyAmount(): BehaviorSubject<number> {
    return this.currencyAmountSubject;
  }

  private startCounting(): void {
    setInterval(() => {
      this.currencyAmount += 1;
      this.currencyAmountSubject.next(this.currencyAmount);
    }, 1000);
  }

  increaseCurrency(amount: number): void {
    this.currencyAmount += amount;
    this.currencyAmountSubject.next(this.currencyAmount);
  }
}
