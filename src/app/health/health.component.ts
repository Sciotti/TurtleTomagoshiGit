import { Component } from '@angular/core';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrl: './health.component.css'
})
export class HealthComponent {
  health: number = 0;

  constructor(private heatlhService: HealthService) { }

  ngOnInit(): void {
    this.heatlhService.getVariable().subscribe(variable => {
      if (variable === 1) {
        // Réagir lorsque la variable passe à 1
        console.log('La variable 1 est maintenant à 1');
      } else if (variable === 0) {
        // Réagir lorsque la variable passe à 0
        console.log('La variable 1 est maintenant à 0');
      } else {
        // Réagir à d'autres valeurs de la variable si nécessaire
      }
      this.health = variable; // Mettre à jour la variable dans le composant
    });
  }
}
