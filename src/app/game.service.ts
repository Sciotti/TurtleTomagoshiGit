import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Turtle } from './Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}
  private gameUrl = 'api/game';  // URL to web api
  getTurtle(): Observable<Turtle[]> {
    return this.http.get<Turtle[]>(this.gameUrl);
  }
}
