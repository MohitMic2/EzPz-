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
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const country_entity_1 = require("../../country/entities/country.entity");
const state_entity_1 = require("../../state/entities/state.entity");
const typeorm_1 = require("typeorm");
let City = class City {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], City.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], City.prototype, "cityName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], City.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], City.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], City.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], City.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], City.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => country_entity_1.Country, (c) => c.city),
    (0, typeorm_1.JoinColumn)({ name: "countryId" }),
    __metadata("design:type", country_entity_1.Country)
], City.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => state_entity_1.State, (c) => c.city),
    (0, typeorm_1.JoinColumn)({ name: "stateId" }),
    __metadata("design:type", state_entity_1.State)
], City.prototype, "state", void 0);
City = __decorate([
    (0, typeorm_1.Entity)('city')
], City);
exports.City = City;
//# sourceMappingURL=city.entity.js.map