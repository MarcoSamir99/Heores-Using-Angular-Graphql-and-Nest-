"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesModule = void 0;
const common_1 = require("@nestjs/common");
const heroes_service_1 = require("./heroes.service");
const heroes_resolvers_1 = require("./heroes.resolvers");
const date_scalar_1 = require("../common/scalars/date.scalar");
const sequelize_1 = require("@nestjs/sequelize");
const heroSequelize_model_1 = require("./Sequelize Model/heroSequelize.model");
let HeroesModule = class HeroesModule {
};
HeroesModule = __decorate([
    (0, common_1.Module)({
        providers: [
            heroes_service_1.HeroesService,
            heroes_resolvers_1.HeroesResolver,
            date_scalar_1.DateScalar,
            {
                provide: 'HEROES_REPOSITORY',
                useValue: heroSequelize_model_1.Hero,
            },
        ],
        imports: [sequelize_1.SequelizeModule.forFeature([heroSequelize_model_1.Hero])],
    })
], HeroesModule);
exports.HeroesModule = HeroesModule;
//# sourceMappingURL=heroes.module.js.map