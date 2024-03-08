import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TurtleService } from './turtle.service';

@Injectable({
  providedIn: 'root'
})
export class SkinService {
  private skin: string = "assets/images/normalTurtle.png";
  private cosmeticskin : string = "assets/images/normalTurtle.png";
  private skinSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.skin);

  constructor(private turtleService : TurtleService) {
    this.start();
  }
  getSkin(): BehaviorSubject<string> {
    return this.skinSubject;
  }
  getActualSkin(): void {
    this.skinSubject.next(this.skin);
  }

  hungerTurtle(): void {
    this.skin = "assets/images/hungerTurtle.png";
    this.skinSubject.next(this.skin);
  }
  happinessTurtle(): void {
    this.skin = "assets/images/happinessTurtle.png";
    this.skinSubject.next(this.skin);
  }
  healthTurtle(): void {
    this.skin = "assets/images/healthTurtle.png";
    this.skinSubject.next(this.skin);
  }
  normalTurtle(): void {
    this.skin = this.cosmeticskin;
    this.skinSubject.next(this.skin);
  }
  westernTurtle(): void {
    //temporarskinTest = this.skin;
    //if (this.skin == this.cosmeticskin)
    this.cosmeticskin = "assets/images/westernTurtle.png";
    if(this.turtleService.ifGoodState()) {
      this.normalTurtle();
    }
  }
  basicTurtle(): void {
    //temporarskinTest = this.skin;
    //if (this.skin == this.cosmeticskin)
    this.cosmeticskin = "assets/images/normalTurtle.png";
    if(this.turtleService.ifGoodState()) {
      this.normalTurtle();
    }
  }
  start(): void {
      this.skinSubject.next(this.skin);
  }
}

