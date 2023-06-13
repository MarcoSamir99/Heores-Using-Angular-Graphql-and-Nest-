import { HeroesArgs } from './dto/hero.args';
import { Hero } from './Sequelize Model/heroSequelize.model';
import { CreateHeroDto } from './dto/createHeroDB';
export declare class HeroesService {
    private heroesRepository;
    constructor(heroesRepository: typeof Hero);
    findOne(id: number): Promise<Hero>;
    findAll(heroesArgs: HeroesArgs): Promise<Hero[]>;
    findSuggestions(key: string): Promise<Hero[]>;
    remove(id: number): Promise<void>;
    create(createHeroDto: CreateHeroDto): Promise<Hero>;
}
