import { Component } from '@angular/core';
import { HealthService } from '../health.service';
import { HungerService } from '../hunger.service';
import { HappinessService } from '../happiness.service';
import { SkinService } from '../skin.service';
import { TurtleService } from '../turtle.service';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {
  health: number = 0;

  constructor(private hungerService: HungerService, private happinessService : HappinessService, private healthService : HealthService, private skinService: SkinService, private turtleService : TurtleService, private currencyService : CurrencyService) { }

  ngOnInit(): void {
    this.healthService.getVariable().subscribe(variable => {
      if (variable === 1) {
        // Réagir lorsque la variable passe à 1
        console.log('La variable 1 est maintenant à 1');
        this.skinService.healthTurtle();
        this.lockOtherVariables();
      } else if (variable === -1) {
        this.turtleService.Dead();
        this.skinService.deadTurtle();
      } else {
        // Réagir à d'autres valeurs de la variable si nécessaire
      }
      this.health = variable; // Mettre à jour la variable dans le composant
    });
  }
  Reset(): void {
    //this.healthService.Reset();
    if (this.turtleService.ifGoodState()) {
      this.unlockOtherVariables();
      this.skinService.normalTurtle();
    }
  }
  LittleBoost(): void {
    if(this.currencyService.numberOfCurrency() >= 20){
      this.healthService.LittleBoost();
      this.currencyService.decreaseCurrency(20);
      this.Reset();
    } else {
      alert("Not enough currency");
    }
  }
  BigBoost(): void {
    if(this.currencyService.numberOfCurrency() >= 100){
      this.healthService.BigBoost();
      this.currencyService.decreaseCurrency(100);
      this.Reset();
    } else {
      alert("Not enough currency");
    }
  }
  lockOtherVariables(): void {
    // Appeler les méthodes de verrouillage des autres services de variables si nécessaire
    this.hungerService.lockVariable();
    this.happinessService.lockVariable();
  }

  unlockOtherVariables(): void {
    // Appeler les méthodes de déverrouillage des autres services de variables si nécessaire
    this.hungerService.unlockVariable();
    this.happinessService.unlockVariable();
  }
}
