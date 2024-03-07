import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const turtle = 
      {
        "name" : "George III",
        "Happiness" : 5,
        "Hunger" : 5,
        "health" : 5,
        "temperature" : 5,
        "skin" : "assets/images/normalTurtle.png"
      }
    ;
    const owner = 
      {
        "money" : 0
      }
    ;
    const skins = 
      {
        "western" : false,
        "angel" : false
      }
    ;
    return {turtle, owner, skins};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  //genId(heroes: Hero[]): number {
  //  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  //}
}