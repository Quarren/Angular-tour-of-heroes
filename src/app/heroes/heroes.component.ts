import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  // bonnes pratiques : "Reserve the constructor for minimal initialization such as wiring constructor parameters to properties"
  // -> le constructeur ne doit rien faire (pas d'appel de méthodes)
  constructor(
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add("HeroesComponent: Selected hero id " + this.selectedHero.id);
  };

  // la méthode attend que l' Observable<Hero[]> émette le tableau de Hero
  // pour pouvoir ensuite initialiser la propriété heroes du composant
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
