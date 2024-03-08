import { Component } from '@angular/core';
import { SkinService } from '../skin.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrl: './skins.component.css'
})
export class SkinsComponent {

  constructor(private skinService : SkinService) { }

  ngOnInit(): void {
  }
  Western(): void {
    this.skinService.westernTurtle();
  }
  Basic(): void {
    this.skinService.basicTurtle();
  }
}
