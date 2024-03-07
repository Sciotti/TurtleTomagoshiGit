import { Component } from '@angular/core';
import { TurtleService } from '../turtle.service';
import { Turtle } from '../Game';

@Component({
  selector: 'app-turtle',
  templateUrl: './turtle.component.html',
  styleUrl: './turtle.component.css'
})
export class TurtleComponent {
  

  constructor(private turtleService: TurtleService) { }
  turtle : Turtle;
  ngOnInit() {
    this.getTurtle();
  }

  getTurtle() {
    this.turtleService.getTurtle()
      .subscribe(turtle => this.turtle = turtle); 
  }

  printTurtle() {
    console.log(this.turtle);
  }

  Hug() {
    console.log(this.turtle);
    if (this.turtle.skin == 'assets/images/normalTurtle.png') {
      this.turtle.skin = "assets/images/hugTurtle.png";
      console.log("Changement d'image");
      // Revenir à l'image d'origine après un court instant (par exemple, 500ms)
      setTimeout(() => {
        console.log("Retour à l'image d'origine");
        this.turtle.skin = 'assets/images/normalTurtle.png';
      }, 500);
      } else {
        console.log("L'image est déjà inversée");
      }
  }
}
