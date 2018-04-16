import { Component, OnInit } from '@angular/core';
import { HeroProviderService } from '../services/hero-provider.service';

import { Hero } from '../entity/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(public heroesProvider: HeroProviderService) { }

  ngOnInit() { 
    this.getHeroes();
  }

  getHeroes() {
    this.heroesProvider.getHeroes().subscribe(response => {
      this.heroes = response;
    });
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroesProvider.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesProvider.deleteHero(hero).subscribe();
  }

}
