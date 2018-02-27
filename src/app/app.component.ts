import { Component, OnInit } from '@angular/core';

import {Hero} from './hero';

import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  
  styleUrls: ['./app.component.css'],
 
  template: `<h1>{{title}}</h1>
  <h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" 
      (click)="onSelect(hero)" 
      [class.selected]="hero === selectedHero">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
<hero-detail [hero]="selectedHero"></hero-detail>
  `,
  providers: [HeroService],
  

 
})

export class AppComponent implements OnInit {
  title = '英雄之旅';
  selectedHero: Hero ;
  heroes: Hero[];
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
 
}




