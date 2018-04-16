import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../entity/hero';
import { HeroProviderService } from '../services/hero-provider.service'; 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroesProvider: HeroProviderService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.heroesProvider.getHero(id).subscribe(response => {      
      this.hero = response;
      console.log(this.hero);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroesProvider.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
