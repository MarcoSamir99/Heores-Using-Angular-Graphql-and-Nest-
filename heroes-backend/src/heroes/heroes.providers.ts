import { Hero } from "./Sequelize Model/heroSequelize.model";


export const heroesProviders = [
  {
    provide: 'HEROES_REPOSITORY',
    useValue: Hero,
    
  },
];