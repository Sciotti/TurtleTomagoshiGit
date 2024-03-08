import { Component } from '@angular/core';
import { TurtleService } from '../turtle.service';
import { Turtle } from '../Game';
import { CurrencyService } from '../currency.service';
import { SkinService } from '../skin.service';

@Component({
  selector: 'app-turtle',
  templateUrl: './turtle.component.html',
  styleUrl: './turtle.component.css'
})
export class TurtleComponent {
  

  constructor(private turtleService: TurtleService, private currencyService : CurrencyService, private skinService : SkinService) { }
  turtle : Turtle;
  skin : string;
  ngOnInit() {
    this.getTurtle();
    
  }

  getTurtle() {
    this.turtleService.getTurtle()
      .subscribe(turtle => {
        this.turtle = turtle;
      });
    this.skinService.getSkin()
      .subscribe(skin => {
        this.skin = skin;
      });
    
    
  }

  printTurtle() {
    console.log(this.turtle);
  }

  Hug() {
    console.log(this.turtle);
    if (this.turtleService.ifGoodState()) {
      this.skin = "assets/images/hugTurtle.png";
      console.log("Changement d'image");

      // Augmenter le compteur de monnaie de 10
      this.currencyService.increaseCurrency(10);
      // Revenir à l'image d'origine après un court instant (par exemple, 500ms)
      setTimeout(() => {
        console.log("Retour à l'image d'origine");
        this.skinService.getActualSkin();
      }, 250);
    } else {
      console.log("L'image est déjà inversée");
    }
  }
}
