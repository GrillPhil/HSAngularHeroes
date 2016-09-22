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
    this.heroService.getHeroes().subscribe(result => {
      this.heroes = result.results;
    });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.url];
    this.router.navigate(link);
  }
}
