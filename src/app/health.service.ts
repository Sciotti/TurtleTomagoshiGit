import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private health : number =5;
  private healthSubject : BehaviorSubject<number> = new BehaviorSubject(this.health);
  private variableLocked : boolean = false;
  constructor() { 
    this.startDecrementing();
  }
  getVariable(): BehaviorSubject<number> {
    return this.healthSubject;
  }
  private startDecrementing(): void {
    setInterval(() => {
      if (this.health > 0 && !this.variableLocked) {
        this.health -= 1;
        this.healthSubject.next(this.health);

        // Si la variable passe à 0, émettez un événement spécial
        if (this.health === 0) {
          this.healthSubject.next(0); // Émettez 0 pour indiquer que la variable est à 0
        }
      }
    }, this.getRandomInterval());
    
  }
  private getRandomInterval(): number {
    return Math.floor(Math.random() * (9000 - 5000) + 5000)
    //return Math.floor(Math.random() * (15 * 60 * 1000 - 5 * 60 * 1000) + 5 * 60 * 1000); // Entre 5 et 15 minutes en millisecondes
  }
  lockVariable(): void {
    this.variableLocked = true;
  }

  unlockVariable(): void {
    this.variableLocked = false;
  }
}
