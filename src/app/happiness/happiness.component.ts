import { Component } from '@angular/core';
import { HappinessService } from '../happiness.service';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrl: './happiness.component.css'
})
export class HappinessComponent {
  happiness: number = 0;

  constructor(private happinessService: HappinessService) { }

  ngOnInit(): void {
    this.happinessService.getVariable().subscribe(variable => {
      if (variable === 1) {
        // Réagir lorsque la variable passe à 1
        console.log('La variable 1 est maintenant à 1');
      } else if (variable === 0) {
        // Réagir lorsque la variable passe à 0
        console.log('La variable 1 est maintenant à 0');
      } else {
        // Réagir à d'autres valeurs de la variable si nécessaire
      }
      this.happiness = variable; // Mettre à jour la variable dans le composant
    });
  }
}
