import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesResolver } from './heroes.resolvers';
import { DateScalar } from 'src/common/scalars/date.scalar';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hero } from './Sequelize Model/heroSequelize.model';


@Module({
  providers: [
    HeroesService,
    HeroesResolver,
    DateScalar,
    {
      provide: 'HEROES_REPOSITORY',
      useValue: Hero,
    },
  ],
  imports: [SequelizeModule.forFeature([Hero])],
  
})
export class HeroesModule {}
