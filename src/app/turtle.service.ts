import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Turtle } from './Game';

@Injectable({
  providedIn: 'root'
})
export class TurtleService {
  private gameUrl = 'api/turtle';  // URL to web api
  constructor(private http: HttpClient) {}

  getTurtle(): Observable<Turtle> {
    return this.http.get<Turtle>(this.gameUrl);
  }

}
