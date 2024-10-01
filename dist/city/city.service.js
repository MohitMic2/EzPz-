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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const city_entity_1 = require("./entities/city.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const response_1 = require("../shared/response");
let CityService = class CityService {
    constructor(cityRepository) {
        this.cityRepository = cityRepository;
    }
    async create(createCityDto) {
        try {
            if (createCityDto.id == 0) {
                await this.cityRepository.save(createCityDto);
                return (0, response_1.WriteResponse)(200, true, 'City Created Successfully.');
            }
            else {
                await this.cityRepository.save(createCityDto);
                return (0, response_1.WriteResponse)(200, true, 'City updated successfully.');
            }
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.message);
        }
    }
    async findAll() {
        const City = await this.cityRepository.find({
            where: { isDeleted: false },
        });
        if (City.length) {
            return (0, response_1.WriteResponse)(200, City, 'City Found Successfully');
        }
        return (0, response_1.WriteResponse)(404, false, 'City not found.');
    }
    async findOne(id) {
        const City = await this.cityRepository.find({
            where: { isDeleted: false, stateId: id },
        });
        if (City) {
            return (0, response_1.WriteResponse)(200, City, 'City found successfully.');
        }
        return (0, response_1.WriteResponse)(404, City, 'City not found.');
    }
    async remove(id) {
        const City = await this.cityRepository.update({ id: id }, { isDeleted: true });
        if (City.affected == 0) {
            return (0, response_1.WriteResponse)(400, false, 'City not found');
        }
        return (0, response_1.WriteResponse)(200, true, 'City deleted successfully.');
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(city_entity_1.City)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map