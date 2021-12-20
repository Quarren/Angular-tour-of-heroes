import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
