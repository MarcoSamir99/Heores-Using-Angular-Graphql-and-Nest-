import { Component} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes? : Hero[];      // we made this empty array because service will fill it auto
  selectedHero?: Hero;  

  constructor(private heroservice: HeroService, private messageService: MessageService) {} //injection

  ngOnInit(): void {     //this used to make getHeroes method excuted (lifecycle)
    this.getHeroes()
  }

  onSelected(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent Selected hero id=${hero.id}`);
  }



  getHeroes() {
    return this.heroservice.getHeroes().subscribe((heroes) => {
      this.heroes= heroes;
      this.messageService.add(`Heroes list attached successfully`);
    })

  }
}

