import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HungerService {
  private hunger : number =5;
  private hungerSubject : BehaviorSubject<number> = new BehaviorSubject(this.hunger);
  private variableLocked : boolean = false;
  constructor() { 
    this.startDecrementing();
  }
  getVariable(): BehaviorSubject<number> {
    return this.hungerSubject;
  }
  private startDecrementing(): void {
    setInterval(() => {
      if (this.hunger > 0 &&!this.variableLocked) {
        this.hunger -= 1;
        this.hungerSubject.next(this.hunger);

        // Si la variable passe à 0, émettez un événement spécial
        if (this.hunger === 0) {
          this.hungerSubject.next(0); // Émettez 0 pour indiquer que la variable est à 0
        }
      }
    }, this.getRandomInterval());
    
  }
  private getRandomInterval(): number {
    return Math.floor(Math.random() * (5000 - 1000) + 2000)
    //return Math.floor(Math.random() * (15 * 60 * 1000 - 5 * 60 * 1000) + 5 * 60 * 1000); // Entre 5 et 15 minutes en millisecondes
  }
  Reset(){
    this.hunger = 5;
    this.hungerSubject.next(this.hunger);
  }
  lockVariable(): void {
    this.variableLocked = true;
  }

  unlockVariable(): void {
    this.variableLocked = false;
  }

  LittleBoost() : void {
    this.hunger += 1;
    this.hungerSubject.next(this.hunger);
  }

  BigBoost() : void {
    this.hunger += 7;
    this.hungerSubject.next(this.hunger);
  }

  goodState() : boolean {
    if (this.hunger >= 2) {
      return true;
    }
    return false;
  }
}
