import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'; // url de l'api web

  // "service in service" scénario : MessageService injecté dans HeroService injecté dans HeroesComponent
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  // méthode asyncrone: l'application doit attendre que getHeroes ait récupéré les données depuis un serveur (le cas échéant)
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add("HeroService: fetched hero " + hero.id);
    return of(hero);
  }

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
