"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
const upper_case_directive_1 = require("./common/directives/upper-case.directive");
const heroes_module_1 = require("./heroes/heroes.module");
const sequelize_1 = require("@nestjs/sequelize");
const heroSequelize_model_1 = require("./heroes/Sequelize Model/heroSequelize.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            heroes_module_1.HeroesModule,
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'MancoSamirRizk1999',
                database: 'heroes',
                autoLoadModels: true,
                models: [heroSequelize_model_1.Hero],
                synchronize: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                subscriptions: {
                    'graphql-ws': true
                },
                autoSchemaFile: 'schema.gql',
                transformSchema: schema => (0, upper_case_directive_1.upperDirectiveTransformer)(schema, 'upper'),
                installSubscriptionHandlers: true,
                buildSchemaOptions: {
                    directives: [
                        new graphql_2.GraphQLDirective({
                            name: 'upper',
                            locations: [graphql_2.DirectiveLocation.FIELD_DEFINITION],
                        }),
                    ],
                },
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map