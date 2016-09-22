import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {

    private http:Http;

    constructor(http:Http) {
        this.http = http;
    }
    
    public getHeroes(): Observable<any> {
        return this.http.get('http://swapi.co/api/people/').map(result => result.json());
    }

    public getHero(url:string): Observable<Hero> {
        return this.http.get(url).map(result => result.json());
    }
}