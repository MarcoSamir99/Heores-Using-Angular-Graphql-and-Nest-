"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const heroes_service_1 = require("./heroes.service");
const hero_args_1 = require("./dto/hero.args");
const heroQL_model_1 = require("./GraphQl Model/heroQL.model");
const new_hero_input_1 = require("./dto/new-hero-input");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const pubSub = new graphql_subscriptions_1.PubSub();
let HeroesResolver = class HeroesResolver {
    constructor(heroesService) {
        this.heroesService = heroesService;
    }
    async hero(id) {
        const hero = await this.heroesService.findOne(id);
        if (!hero) {
            throw new common_1.NotFoundException(id);
        }
        return hero;
    }
    async heroes(heroesArgs) {
        return this.heroesService.findAll(heroesArgs);
    }
    async suggestedHeroes(key) {
        const suggested = await this.heroesService.findSuggestions(key);
        return suggested;
    }
    async addHero(newHeroData) {
        const hero = await this.heroesService.create(newHeroData);
        pubSub.publish('HeroAdded', { HeroAdded: hero });
        return {
            id: 1,
            name: 'test'
        };
    }
    async removeHero(id) {
        return this.heroesService.remove(id);
    }
    heroAdded() {
        return pubSub.asyncIterator('heroAdded');
    }
};
__decorate([
    (0, graphql_1.Query)(returns => heroQL_model_1.HeroQl),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HeroesResolver.prototype, "hero", null);
__decorate([
    (0, graphql_1.Query)(returns => [heroQL_model_1.HeroQl]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hero_args_1.HeroesArgs]),
    __metadata("design:returntype", Promise)
], HeroesResolver.prototype, "heroes", null);
__decorate([
    (0, graphql_1.Query)(returns => [heroQL_model_1.HeroQl]),
    __param(0, (0, graphql_1.Args)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HeroesResolver.prototype, "suggestedHeroes", null);
__decorate([
    (0, graphql_1.Mutation)(returns => heroQL_model_1.HeroQl),
    __param(0, (0, graphql_1.Args)('newHeroData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_hero_input_1.NewHeroInput]),
    __metadata("design:returntype", Promise)
], HeroesResolver.prototype, "addHero", null);
__decorate([
    (0, graphql_1.Mutation)(returns => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HeroesResolver.prototype, "removeHero", null);
__decorate([
    (0, graphql_1.Subscription)(returns => heroQL_model_1.HeroQl),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeroesResolver.prototype, "heroAdded", null);
HeroesResolver = __decorate([
    (0, graphql_1.Resolver)(of => heroQL_model_1.HeroQl),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService])
], HeroesResolver);
exports.HeroesResolver = HeroesResolver;
//# sourceMappingURL=heroes.resolvers.js.map