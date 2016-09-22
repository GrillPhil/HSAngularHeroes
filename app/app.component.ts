import { Component } from '@angular/core';
import { HeroService } from './model/hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [ HeroService ]
})
export class AppComponent { 
  private title:string = 'Tour of Heroes';
}
