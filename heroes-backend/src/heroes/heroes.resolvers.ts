import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Parent, Query, Resolver, Subscription} from '@nestjs/graphql';
import { HeroesService } from './heroes.service';
import { HeroesArgs } from './dto/hero.args';
import { HeroQl } from './GraphQl Model/heroQL.model';
import { NewHeroInput } from './dto/new-hero-input';
import { PubSub } from 'graphql-subscriptions';


const pubSub = new PubSub();

@Resolver(of => HeroQl)
export class HeroesResolver {
  constructor(private readonly heroesService: HeroesService) {}

  @Query(returns => HeroQl)
  async hero(@Args('id') id: number): Promise<HeroQl> {
    const hero = await this.heroesService.findOne(id);
    if (!hero) {
      throw new NotFoundException(id);
    }
    return hero;
  }

  @Query(returns => [HeroQl])
  async heroes(@Parent() heroesArgs:HeroesArgs): Promise<HeroQl[]> {
    return this.heroesService.findAll(heroesArgs);
  }

  @Query(returns => [HeroQl])
  async suggestedHeroes(@Args('key') key: string): Promise<HeroQl[]> {
    const suggested = await this.heroesService.findSuggestions(key);
    return suggested;
  }
  
  @Mutation(returns => HeroQl)
  async addHero(
    @Args('newHeroData') newHeroData: NewHeroInput,
): Promise<HeroQl> {
    const hero = await this.heroesService.create(newHeroData);
    pubSub.publish('HeroAdded', { HeroAdded: hero });
    return {
      id: 1,
      name: 'test'
    };
  }

  @Mutation(returns => Boolean)
  async removeHero(@Args('id') id: number) {
    return this.heroesService.remove(id);
  }

  @Subscription(returns => HeroQl)
  heroAdded() {
    return pubSub.asyncIterator('heroAdded');
  }
}