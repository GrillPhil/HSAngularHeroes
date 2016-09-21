import { Component } from '@angular/core';
import { Hero } from './../model/hero.model';
import { HeroService } from './../model/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './app/heroes/heroes.component.html',
  providers: [ HeroService ]
})
export class HeroesComponent { 
  private heroes:Hero[];
  private selectedHero:Hero;
  private heroService:HeroService;

  constructor(heroService:HeroService) {
    this.heroService = heroService;
    this.heroes = this.heroService.getHeroes();
  }

  private onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}
