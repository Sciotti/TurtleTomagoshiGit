import { Component } from '@angular/core';
import { HungerService } from '../hunger.service';
import { HappinessService } from '../happiness.service';
import { HealthService } from '../health.service';
import { SkinService } from '../skin.service';
import { TurtleService } from '../turtle.service';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-hunger',
  templateUrl: './hunger.component.html',
  styleUrl: './hunger.component.css'
})
export class HungerComponent {
  constructor(private hungerService: HungerService, private happinessService : HappinessService, private healthService : HealthService, private skinService: SkinService, private turtleService : TurtleService, private currencyService : CurrencyService) { }
  hunger : number = 0;
  ngOnInit(): void {
    this.hungerService.getVariable().subscribe(variable => {
      if (variable === 1) {
        // Réagir lorsque la variable passe à 1
        //console.log('La variable 1 est maintenant à 1');
        this.lockOtherVariables();
        this.skinService.hungerTurtle();
      } else if (variable === -1) {
        this.turtleService.Dead();
        this.skinService.deadTurtle();
      } else {
        // Réagir à d'autres valeurs de la variable si nécessaire
      }
      this.hunger = variable; // Mettre à jour la variable dans le composant
    });
  }
  Reset(): void {
    //this.hungerService.Reset();
    if (this.turtleService.ifGoodState()) {
      this.unlockOtherVariables();
      this.skinService.normalTurtle();
    }
  }
  LittleBoost(): void {
    if(this.currencyService.numberOfCurrency() >= 20){
      this.hungerService.LittleBoost();
      this.currencyService.decreaseCurrency(20);
      this.Reset();

    } else {
      alert("Not enough currency");
    }
  }
  BigBoost(): void {
    if(this.currencyService.numberOfCurrency() >= 100){
      this.hungerService.BigBoost();
      this.currencyService.decreaseCurrency(100);
      this.Reset();
    } else {
      alert("Not enough currency");
    }
  }

  lockOtherVariables(): void {
    // Appeler les méthodes de verrouillage des autres services de variables si nécessaire
    this.healthService.lockVariable();
    this.happinessService.lockVariable();
  }

  unlockOtherVariables(): void {
    // Appeler les méthodes de déverrouillage des autres services de variables si nécessaire
    this.healthService.unlockVariable();
    this.happinessService.unlockVariable();
  }


}
