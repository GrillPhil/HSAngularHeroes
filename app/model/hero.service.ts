import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
    public getHeroes(): Hero[] {
        return [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
    }

    public getHero(id:number): Hero {
        let heroes = this.getHeroes();
        for (let i = 0; i < heroes.length; i++) {
            if (heroes[i].id === id) {
                return heroes[i];
            }
        }
        return null;
    }
}