import { Hero } from "./Sequelize Model/heroSequelize.model";
export declare const heroesProviders: {
    provide: string;
    useValue: typeof Hero;
}[];
