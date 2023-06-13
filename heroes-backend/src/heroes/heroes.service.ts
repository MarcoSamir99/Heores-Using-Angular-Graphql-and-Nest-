import { Inject, Injectable } from '@nestjs/common';
import { HeroesArgs } from './dto/hero.args';
import { Hero } from './Sequelize Model/heroSequelize.model';
import { CreateHeroDto } from './dto/createHeroDB';
import { Op } from 'sequelize';

@Injectable()
export class HeroesService {
  constructor(
    @Inject('HEROES_REPOSITORY')
    private heroesRepository: typeof Hero
   
  ){}

  async findOne(id: number): Promise<Hero> {
    return this.heroesRepository.findOne({
      where: {
        id,
      },
    })
  }
  
  async findAll(heroesArgs: HeroesArgs): Promise<Hero[]> {
    return this.heroesRepository.findAll();
  }


  async findSuggestions( key: string ): Promise<Hero[]> {
    return this.heroesRepository.findAll({ 
      where: {
        name: {
            [Op.like]: key + "%"
        }
      },
      limit: 5 
    })
    
  }
  
  async remove(id: number): Promise<void> {
    const hero = await this.findOne(id);
    await hero.destroy();
  }

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
      return this.heroesRepository.create({
        name: createHeroDto.name,
        id: createHeroDto.id,
      });
    }
} 