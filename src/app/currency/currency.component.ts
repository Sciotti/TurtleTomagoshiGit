// currency.component.ts
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currencyAmount: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencyAmount().subscribe(amount => {
      this.currencyAmount = amount;
    });
  }
}
