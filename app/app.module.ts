import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { routing }              from './app.routes';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  routing ],
  declarations: [ AppComponent,
                  DashboardComponent,
                  HeroDetailComponent,
                  HeroesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
