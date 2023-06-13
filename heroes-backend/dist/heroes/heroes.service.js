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
exports.HeroesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let HeroesService = class HeroesService {
    constructor(heroesRepository) {
        this.heroesRepository = heroesRepository;
    }
    async findOne(id) {
        return this.heroesRepository.findOne({
            where: {
                id,
            },
        });
    }
    async findAll(heroesArgs) {
        return this.heroesRepository.findAll();
    }
    async findSuggestions(key) {
        return this.heroesRepository.findAll({
            where: {
                name: {
                    [sequelize_1.Op.like]: key + "%"
                }
            },
            limit: 5
        });
    }
    async remove(id) {
        const hero = await this.findOne(id);
        await hero.destroy();
    }
    async create(createHeroDto) {
        return this.heroesRepository.create({
            name: createHeroDto.name,
            id: createHeroDto.id,
        });
    }
};
HeroesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('HEROES_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], HeroesService);
exports.HeroesService = HeroesService;
//# sourceMappingURL=heroes.service.js.map