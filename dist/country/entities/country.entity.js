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
exports.Country = void 0;
const city_entity_1 = require("../../city/entities/city.entity");
const state_entity_1 = require("../../state/entities/state.entity");
const typeorm_1 = require("typeorm");
let Country = class Country {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Country.prototype, "countryName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Country.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Country.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Country.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => state_entity_1.State, (s) => s.country),
    __metadata("design:type", Object)
], Country.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => city_entity_1.City, (s) => s.country),
    __metadata("design:type", Object)
], Country.prototype, "city", void 0);
Country = __decorate([
    (0, typeorm_1.Entity)('country')
], Country);
exports.Country = Country;
//# sourceMappingURL=country.entity.js.map