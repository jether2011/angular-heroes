import { Component, OnInit } from '@angular/core';

import { HeroProviderService } from '../services/hero-provider.service'; 
import { Hero } from '../entity/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public heroes: Hero[] = [];

  constructor(private heroesProvider: HeroProviderService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesProvider.getHeroes().subscribe(response => {
      console.log(response);
      this.heroes = response.slice(1,5);
    });
  }
}
