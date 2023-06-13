
import { Injectable } from '@angular/core';
import { Observable, debounceTime, delay, distinctUntilChanged, map} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { Hero } from './heroes/hero';
import { HeroesGQL, HeroGQL, SuggestedHeroesGQL} from 'src/generated/graphql';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes? : Hero[];
  hero? : Hero;
  suggestedHeroes? : Hero[];
  
  constructor (private httpClient: HttpClient ,
    private messageservice: MessageService, 
    private apollo: Apollo,
    private heroesGql: HeroesGQL,
    private heroGql: HeroGQL,
    private suggestedHeroGql: SuggestedHeroesGQL,) { }

  getHeroes(): Observable<Hero[]> {                    
    const heroes = this.heroesGql.watch().valueChanges.pipe(map(result => result.data.heroes))
    return heroes;                                 
  }

  getHero(id: number): Observable<Hero> {            
    const hero = this.heroGql.watch({id}).valueChanges.pipe(map(result => result.data.hero))
    console.log(hero);
    return hero;                                 
  }

  getSuggestedHeroes(key: string): Observable<Hero[]> {            
    const suggestedHeroes = this.suggestedHeroGql.watch({key}).valueChanges.pipe(map(result => result.data.suggestedHeroes));
    return suggestedHeroes;
  }          
  

}
