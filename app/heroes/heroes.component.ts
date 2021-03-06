import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './../model/hero.model';
import { HeroService } from './../model/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './app/heroes/heroes.component.html'
})
export class HeroesComponent { 
  private router:Router;
  private heroes:Hero[];
  private heroService:HeroService;

  constructor(heroService:HeroService, router:Router) {
    this.router = router;
    this.heroService = heroService;
    this.heroService.getHeroes().subscribe(result => { 
      this.heroes = result.results; 
    });
  }

  private onSelect(hero:Hero) {
    let link = ['/detail', hero.url];
    this.router.navigate(link);
  }
}
