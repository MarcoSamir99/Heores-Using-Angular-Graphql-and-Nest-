import { HeroesService } from './heroes.service';
import { HeroesArgs } from './dto/hero.args';
import { HeroQl } from './GraphQl Model/heroQL.model';
import { NewHeroInput } from './dto/new-hero-input';
export declare class HeroesResolver {
    private readonly heroesService;
    constructor(heroesService: HeroesService);
    hero(id: number): Promise<HeroQl>;
    heroes(heroesArgs: HeroesArgs): Promise<HeroQl[]>;
    suggestedHeroes(key: string): Promise<HeroQl[]>;
    addHero(newHeroData: NewHeroInput): Promise<HeroQl>;
    removeHero(id: number): Promise<void>;
    heroAdded(): AsyncIterator<unknown, any, undefined>;
}
