import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HappinessService {

  private happiness : number =5;
  private happinessSubject : BehaviorSubject<number> = new BehaviorSubject(this.happiness);
  private variableLocked : boolean = false;
  constructor() { 
    this.startDecrementing();
  }
  getVariable(): BehaviorSubject<number> {
    return this.happinessSubject;
  }
  private startDecrementing(): void {
    setInterval(() => {
      if (this.happiness > 0 && !this.variableLocked) {
        this.happiness -= 1;
        this.happinessSubject.next(this.happiness);

        // Si la variable passe à 0, émettez un événement spécial
        if (this.happiness === 0) {
          this.happinessSubject.next(0); // Émettez 0 pour indiquer que la variable est à 0
        }
      }
    }, this.getRandomInterval());
    
  }
  private getRandomInterval(): number {
    return Math.floor(Math.random() * (9000 - 5000) + 3000)
    //return Math.floor(Math.random() * (15 * 60 * 1000 - 5 * 60 * 1000) + 5 * 60 * 1000); // Entre 5 et 15 minutes en millisecondes
  }
  Reset(){
    this.happiness = 5;
    this.happinessSubject.next(this.happiness);
  }
  LittleBoost() : void {
    this.happiness += 1;
    this.happinessSubject.next(this.happiness);
  }

  BigBoost() : void {
    this.happiness += 7;
    this.happinessSubject.next(this.happiness);
  }
  lockVariable(): void {
    this.variableLocked = true;
  }

  unlockVariable(): void {
    this.variableLocked = false;
  }

  goodState() : boolean {
    if (this.happiness >= 2) {
      return true;
    }
    return false;
  }
}
