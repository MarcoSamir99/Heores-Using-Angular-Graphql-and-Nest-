"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroesProviders = void 0;
const heroSequelize_model_1 = require("./Sequelize Model/heroSequelize.model");
exports.heroesProviders = [
    {
        provide: 'HEROES_REPOSITORY',
        useValue: heroSequelize_model_1.Hero,
    },
];
//# sourceMappingURL=heroes.providers.js.map