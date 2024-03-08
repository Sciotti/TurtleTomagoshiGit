import { Component } from '@angular/core';
import { HappinessService } from '../happiness.service';
import { HungerService } from '../hunger.service';
import { HealthService } from '../health.service';
import { SkinService } from '../skin.service';
import { TurtleService } from '../turtle.service';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrl: './happiness.component.css'
})
export class HappinessComponent {
  happiness: number = 0;

  constructor(private hungerService: HungerService, private happinessService : HappinessService, private healthService : HealthService, private skinService: SkinService, private turtleService : TurtleService, private currencyService : CurrencyService) { }

  ngOnInit(): void {
    this.happinessService.getVariable().subscribe(variable => {
      if (variable === 1) {
        // Réagir lorsque la variable passe à 1
        console.log('La variable 1 est maintenant à 1');
        this.skinService.happinessTurtle();
        this.lockOtherVariables();
      } else if (variable === 0) {
        // Réagir lorsque la variable passe à 0
        console.log('La variable 1 est maintenant à 0');
      } else {
        // Réagir à d'autres valeurs de la variable si nécessaire
      }
      this.happiness = variable; // Mettre à jour la variable dans le composant
    });
  }
  Reset(): void {
    //this.happinessService.Reset();
    if (this.turtleService.ifGoodState()) {
      this.unlockOtherVariables();
      this.skinService.normalTurtle();
    }
  }
  LittleBoost(): void {
    if(this.currencyService.numberOfCurrency() >= 20){
      this.happinessService.LittleBoost();
      this.currencyService.decreaseCurrency(20);
      this.Reset();
    } else {
      alert("Not enough currency");
    }
  }
  BigBoost(): void {
    if(this.currencyService.numberOfCurrency() >= 100){
      this.happinessService.BigBoost();
      this.currencyService.decreaseCurrency(100);
      this.Reset();
    } else {
      alert("Not enough currency");
    }
  }
  lockOtherVariables(): void {
    // Appeler les méthodes de verrouillage des autres services de variables si nécessaire
    this.hungerService.lockVariable();
    this.healthService.lockVariable();
  }

  unlockOtherVariables(): void {
    // Appeler les méthodes de déverrouillage des autres services de variables si nécessaire
    this.hungerService.unlockVariable();
    this.healthService.unlockVariable();
  }
}
