import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Turtle } from './Game';
import { HungerService } from './hunger.service';
import { HealthService } from './health.service';
import { HappinessService } from './happiness.service';

@Injectable({
  providedIn: 'root'
})
export class TurtleService {
  private gameUrl = 'api/turtle';  // URL to web api
  constructor(private http: HttpClient, private hungerSerivce: HungerService, private healthService : HealthService, private happinessService : HappinessService) {}

  getTurtle(): Observable<Turtle> {
    return this.http.get<Turtle>(this.gameUrl);
  }

  ifGoodState() : boolean {
    if (this.hungerSerivce.goodState() && this.healthService.goodState() && this.happinessService.goodState()) {
      return true;
    }
    return false;
  }
}
