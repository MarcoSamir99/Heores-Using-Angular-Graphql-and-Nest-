import { Component } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes(); //to excute getHeroes bellow
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(response => this.heroes = response.slice(1,5))
  }
}
