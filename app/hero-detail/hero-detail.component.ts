import { Component, Input } from '@angular/core';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'hero-detail',
  templateUrl: './app/hero-detail/hero-detail.component.html'
})
export class HeroDetailComponent {
    @Input()
    private hero:Hero;
}
