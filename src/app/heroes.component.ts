import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';

import {Hero} from './hero';
import { HeroService } from './hero.service';
import { Route } from '@angular/router/src/config';



@Component({
  selector: 'my-heroes',
  
  styleUrls: ['./heroes.component.css'],
 
  templateUrl: './heroes.component.html',
  // providers: [],
  

 
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
   ) { }
  selectedHero: Hero ;
  heroes: Hero[];
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 
}




