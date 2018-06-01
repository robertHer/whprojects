import {Injectable} from '@angular/core';
import {HEROES} from './../mock-heroes';
import {hero} from './../hero';
import {Observable, of} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class HeroService {

    public getHeroes(): Observable<hero[]>{
        return of (HEROES);
    }
}