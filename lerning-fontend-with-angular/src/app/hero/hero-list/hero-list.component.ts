import { Component, OnInit } from '@angular/core';
import { Hero, Power } from '../hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  public heroes: any;
  public heroDialog: boolean = false;
  public hero: Hero = {} as Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getAllHeroes().subscribe({
      next: (heroes: Hero[]) => {
        let parsedHeroes = heroes.map((h: Hero) => {
          return { ...h, powers: h.powers.map((p: Power) => p.name) };
        });
        this.heroes = parsedHeroes;
      },
      error: (err) => {},
    });
  }

  showDialog() {
    this.heroDialog = true;
  }

  hideDialog() {
    this.hero = {} as Hero;
  }

  deleteHero(heroId:number){
    console.log('vliza li tuka')
    this.heroService.deleteHero(heroId).subscribe({
      next: (hero) =>{
        console.log(hero);
        this.ngOnInit();
      },
      error: (err) => {
        console.error(err);
      },
    })
  }

  createHero() {
    this.heroService.createHero(this.hero).subscribe({
      next: (hero) => {
        this.getHeroes();
        this.hero = {} as Hero;
        this.heroDialog = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
