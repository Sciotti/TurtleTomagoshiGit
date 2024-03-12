import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Turtle } from './Game';
import { HungerService } from './hunger.service';
import { HealthService } from './health.service';
import { HappinessService } from './happiness.service';
import { CurrencyService } from './currency.service';
import { SkinService } from './skin.service';

@Injectable({
  providedIn: 'root'
})
export class TurtleService {
  private gameUrl = 'api/turtle';  // URL to web api
  isDead : boolean = false;
  constructor(private http: HttpClient, private hungerSerivce: HungerService, private healthService : HealthService, private happinessService : HappinessService, private currencyService : CurrencyService) {}

  getTurtle(): Observable<Turtle> {
    return this.http.get<Turtle>(this.gameUrl);
  }

  Dead() : void {
    this.isDead = true;
    this.hungerSerivce.lockVariable();
    this.healthService.lockVariable();
    this.happinessService.lockVariable();
    this.currencyService.stopCurrency();
    //this.skinService.deadTurtle();
  }

  ifGoodState() : boolean {
    if (this.hungerSerivce.goodState() && this.healthService.goodState() && this.happinessService.goodState() && !this.isDead) {
      return true;
    }
    return false;
  }
}
