import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../model/hero.model';
import { HeroService } from '../model/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './app/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent {
    private route:ActivatedRoute;
    private heroService:HeroService;
    private hero:Hero;

    constructor(route:ActivatedRoute, heroService:HeroService) {
      this.route = route;
      this.heroService = heroService;

      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.hero = this.heroService.getHero(id);
      });
    }
}
