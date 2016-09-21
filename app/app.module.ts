import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }