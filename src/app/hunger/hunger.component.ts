import { Component } from '@angular/core';
import { HungerService } from '../hunger.service';
import { HappinessService } from '../happiness.service';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-hunger',
  templateUrl: './hunger.component.html',
  styleUrl: './hunger.component.css'
})
export class HungerComponent {
  hunger: number = 0;

  constructor(private hungerService: HungerService, private happinessService : HappinessService, private healthService : HealthService) { }

  ngOnInit(): void {
    this.hungerService.getVariable().subscribe(variable => {
      if (variable === 1) {
        // Réagir lorsque la variable passe à 1
        console.log('La variable 1 est maintenant à 1');
        this.lockOtherVariables();
      } else if (variable === 0) {
        // Réagir lorsque la variable passe à 0
        console.log('La variable 1 est maintenant à 0');
      } else {
        // Réagir à d'autres valeurs de la variable si nécessaire
      }
      this.hunger = variable; // Mettre à jour la variable dans le composant
    });
  }
  Reset(): void {
    this.unlockOtherVariables();
    //this.hunger = 5;
    this.hungerService.Reset();
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
