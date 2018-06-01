import { Component , OnInit} from '@angular/core';
import { hero } from '../hero';
import {HeroService} from './../Services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes :hero[] ;
  public selectedHero: hero;

  constructor(private heroService:HeroService){}
  ngOnInit(){
    this.heroService.getHeroes().subscribe((heroesFromObservable) => {
      this.heroes = heroesFromObservable;
    });
  }

  onSelect(hero:hero){
    this.selectedHero = hero
  }

}