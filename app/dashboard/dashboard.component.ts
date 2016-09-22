import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './../model/hero.model';
import { HeroService } from './../model/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './app/dashboard/dashboard.component.html'
})
export class DashboardComponent { 
  private heroService:HeroService;
  private heroes:Hero[];
  private router:Router;

  constructor(heroService:HeroService, router:Router) {
    this.router = router;
    this.heroService = heroService;
    this.heroes = this.heroService.getHeroes().slice(1,5);
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
