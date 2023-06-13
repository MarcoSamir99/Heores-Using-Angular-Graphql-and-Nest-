import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  suggestedHeroes: Hero[] = [];
  key? : string;

  constructor(private heroService:HeroService ){}

  ngOnInit(): void {     
  }

  sendData(event: any){
    const key = event.target.value;
    const matchspaces:any = key.match(/\s*/);

    if (matchspaces[0] === key) {
      return this.suggestedHeroes = []
    } else {
     const suggestedHeroes = this.heroService.getSuggestedHeroes(key).pipe(debounceTime(300), distinctUntilChanged())
    .subscribe(suggestedHeroes => this.suggestedHeroes= suggestedHeroes )
    return suggestedHeroes;
    }
}

}
