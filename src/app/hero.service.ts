import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // "service in service" scénario : MessageService injecté dans HeroService injecté dans HeroesComponent
  constructor(private messageService: MessageService) { }

  // méthode asyncrone: l'application doit attendre que getHeroes ait récupéré les données depuis un serveur (le cas échéant)
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
}
